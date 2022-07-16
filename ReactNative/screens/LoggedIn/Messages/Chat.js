import React, { useState, useCallback, useEffect, useContext } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { MessagesContext } from "../../../contexts/MessagesContext";
import { UserContext } from "../../../contexts/UserContext";
import { addDoc } from "firebase/firestore";

const Chat = () => {
  const { user } = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  // const { allMessages, setAllMessages, colRef } = useContext(MessagesContext);

  useEffect(() => {
    // console.log(allMessages);
    console.log(user.info._id);
    // setMessages(allMessages);
  }, []);

  const onSend = useCallback((messages = []) => {
    // addDoc(colRef, {
    //   // text: messages,
    //   // createdAt: new Date(),
    //   _id: user.info._id,
    //   // user: {
    //   //   _id: "2",
    //   //   name: "Sam",
    //   // },
    // }).then(() => console.log("response"));
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
};
export default Chat;

// ============ DB Linking =============
// import React, { useContext } from "react";
// import { Text, View } from "react-native";
// import { MessagesContext } from "../../../contexts/MessagesContext";

// const Messages = () => {
//   const { messages, setMessages } = useContext(MessagesContext);
//   return (
//     <View>
//       <Text>{JSON.stringify(messages)}</Text>
//     </View>
//   );
// };

// export default Messages;
