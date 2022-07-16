import React, { useState, useCallback, useEffect, useContext } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { MessagesContext } from "../../../contexts/MessagesContext";
import { UserContext } from "../../../contexts/UserContext";
import { addDoc, onSnapshot, orderBy, query } from "firebase/firestore";
import { colRef } from "../../../firebase";

const Chat = () => {
  const { user } = useContext(UserContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(colRef, orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setMessages(
        querySnapshot.docs.map((doc) => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      );
    });
    console.log(messages);
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
        // receiverID: 1,
        // name: user.info.name,
      }}
    />
  );
};
export default Chat;
