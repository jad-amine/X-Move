import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
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
