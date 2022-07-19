import React, { useState, useCallback, useEffect, useContext } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { MessagesContext } from "../../../contexts/MessagesContext";
import { UserContext } from "../../../contexts/UserContext";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { colRef, db } from "../../../firebase";
import { useRoute } from "@react-navigation/native";

const Chat = () => {
  const { user } = useContext(UserContext);
  const { rooms } = useContext(MessagesContext);
  const [messages, setMessages] = useState([]);
  const route = useRoute();

  useEffect(() => {
    const userB = route.params;
    const room = rooms.find((room) =>
      room.participantsArray.includes(userB.email)
    );
    if (room) {
      const roomRef = doc(db, "rooms", room.id);
      const roomMessagesRef = collection(db, "rooms", room.id, "messages");
      const unsubscribe = onSnapshot(roomMessagesRef, (querySnapshot) => {
        const messagesFirestore = querySnapshot
          .docChanges()
          .filter(({ type }) => type == "added")
          .map(({ doc }) => {
            const message = doc.data();
            // return { ...message, createdAt: message.createdAt.toDate() };
          });
        // appendMessages(messages);
      });
      return () => unsubscribe();
    } else if (room === undefined) {
      console.log(room);
      async function addRoom() {
        try {
          const roomId = Math.floor(Math.random() * 100000000);
          // const roomRef = doc(db, "rooms", roomId);
          const currUserData = {
            displayName: user.info.name,
            email: user.info.email,
          };
          const userBData = {
            displayName: userB.name,
            email: userB.email,
          };
          const roomData = {
            participants: [currUserData, userBData],
            participantsArray: [user.info.email, userB.email],
          };
          setDoc(doc(db, "rooms", roomId.toString()), {
            participants: [currUserData, userBData],
            participantsArray: [user.info.email, userB.email],
          }).then((a) => console.log("response", a));
        } catch (error) {
          console.log(error);
        }
      }
      addRoom();
    }
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];
    addDoc(colRef, {
      _id,
      createdAt,
      text,
      user,
    }).then(() => console.log("response"));
    console.log(messages);
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: user.info._id,
        // name: user.info.name,
        // avatar: user.info.picture,
      }}
    />
  );
};
export default Chat;

// const q = query(colRef, orderBy("createdAt", "desc"));
// const unsubscribe = onSnapshot(q, (querySnapshot) => {
//   setMessages(
//     querySnapshot.docs.map((doc) => ({
//       _id: doc.data()._id,
//       createdAt: doc.data().createdAt.toDate(),
//       text: doc.data().text,
//       user: doc.data().user,
//     }))
//   );
// });
