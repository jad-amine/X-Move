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
  updateDoc,
} from "firebase/firestore";
import { colRef, db } from "../../../firebase";
import { useRoute } from "@react-navigation/native";
import { ImageBackground } from "react-native";

const Chat = () => {
  const { user } = useContext(UserContext);
  const { rooms, setRooms } = useContext(MessagesContext);
  const [messages, setMessages] = useState([]);
  const route = useRoute();
  const [roomId, setRoomId] = useState(null);

  useEffect(() => {
    const userB = route.params;
    const room = rooms
      ? rooms.find((room) => room.participantsArray.includes(userB.email))
      : false;
    let randomID;
    if (!room) {
      async function addRoom() {
        try {
          randomID = Math.floor(Math.random() * 100000000).toString();
          const roomRef = doc(db, "rooms", randomID);
          setRoomId(randomID);
          const currUserData = {
            displayName: user.info.name,
            email: user.info.email,
            pictureURL: user.info.pictureURL,
          };
          const userBData = {
            displayName: userB.name,
            email: userB.email,
            pictureURL: userB.pictureURL,
          };
          const roomData = {
            participants: [currUserData, userBData],
            participantsArray: [user.info.email, userB.email],
          };
          setDoc(roomRef, roomData)
            .then((a) =>
              setRooms([
                ...rooms,
                {
                  ...roomData,
                  id: randomID,
                  userB: {
                    displayName: userB.name,
                    email: userB.email,
                    pictureURL: userB.pictureURL,
                  },
                },
              ])
            )
            .catch((err) => {
              console.log(err, err.message);
            });
        } catch (error) {
          console.log(error);
        }
      }
      addRoom();
    } else {
      setRoomId(room.id);
      randomID = room.id;
    }
    const roomMessagesRef = query(
      collection(db, "rooms", randomID.toString(), "messages"),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(roomMessagesRef, (querySnapshot) => {
      const messagesFirestore = querySnapshot
        .docChanges()
        .filter(({ type }) => type == "added")
        .map(({ doc }) => {
          const message = doc.data();
          return { ...message, createdAt: message?.createdAt?.toDate() };
        });
      messagesFirestore ? appendMessages(messagesFirestore) : null;
    });
    return () => unsubscribe();
  }, []);

  const appendMessages = useCallback(
    (messages = []) => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages)
      );
    },
    [messages]
  );

  async function onSend(messages = []) {
    try {
      const roomMessagesRef = collection(db, "rooms", roomId, "messages");
      const roomRef = doc(db, "rooms", roomId.toString());
      const writes = messages.map((m) => addDoc(roomMessagesRef, m));
      const lastMessage = messages[messages.length - 1];
      writes.push(updateDoc(roomRef, { lastMessage }));
      await Promise.all(writes);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ImageBackground
      source={require("../../../assets/chatBackground.jpg")}
      style={{ flex: 1 }}
    >
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: user.info._id,
          // name: user.info.name,
          // avatar: user.info.pictureURL,
        }}
        // placeholder="Type Your Message"
      />
    </ImageBackground>
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
