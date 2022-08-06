// Utilities
import { db } from "../../../firebase";
import { useRoute } from "@react-navigation/native";
import { global } from "../../../styles/globalStyles";
import { Alert, ImageBackground } from "react-native";
import { UserContext } from "../../../contexts/UserContext";
import { MessagesContext } from "../../../contexts/MessagesContext";
import React, { useState, useCallback, useEffect, useContext } from "react";
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

// Component
import { GiftedChat } from "react-native-gifted-chat";

const Chat = () => {
  const route = useRoute();
  const { user } = useContext(UserContext);
  const [roomId, setRoomId] = useState(null);
  const [messages, setMessages] = useState([]);
  const { rooms, setRooms } = useContext(MessagesContext);

  useEffect(() => {
    const userB = route.params;
    const room = rooms
      ? rooms.find((room) => room.participantsArray.includes(userB.email))
      : false;
    let randomID;

    // Check if firestore db holds any previous rooms between the two users
    if (!room) {
      // 1. Create a new room and add the users information
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
              Alert.alert("Network error !");
            });
        } catch (error) {
          Alert.alert("Network error !");
        }
      }
      addRoom();
    } else {
      // Otherwise fetch previous chats between those users
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

  // Append messages to chat screen
  const appendMessages = useCallback(
    (messages = []) => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages)
      );
    },
    [messages]
  );

  // Add message to firestore collection & update last message to display
  async function onSend(messages = []) {
    try {
      const roomMessagesRef = collection(db, "rooms", roomId, "messages");
      const roomRef = doc(db, "rooms", roomId.toString());
      const writes = messages.map((m) => addDoc(roomMessagesRef, m));
      const lastMessage = messages[messages.length - 1];
      writes.push(updateDoc(roomRef, { lastMessage }));
      await Promise.all(writes);
    } catch (err) {
      Alert.alert("Network error !");
    }
  }

  return (
    <ImageBackground
      source={require("../../../assets/chatBackground.jpg")}
      style={global.chatScreen}
    >
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: user.info._id,
          // name: user.info.name,
          // avatar: user.info.pictureURL,
        }}
      />
    </ImageBackground>
  );
};
export default Chat;
