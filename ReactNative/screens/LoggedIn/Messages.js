import React, { useContext } from "react";
import { Text, View } from "react-native";
import { MessagesContext } from "../../contexts/MessagesContext";

const Messages = () => {
  const { messages, setMessages } = useContext(MessagesContext);
  return (
    <View>
      <Text>{JSON.stringify(messages)}</Text>
    </View>
  );
};

export default Messages;
