import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import messages from "../../../firebase";

const Conversations = ({ navigation }) => {
  const [allMessages, setAllMessages] = useState(messages);
  useEffect(() => {
    setAllMessages(messages);
  }, [messages]);

  return (
    <View>
      <Text>Conversations</Text>
      <Button title="Chat" onPress={() => navigation.navigate("Chat")} />
    </View>
  );
};

export default Conversations;
