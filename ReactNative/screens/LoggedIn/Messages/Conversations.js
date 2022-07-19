import { View, Text, Button } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import messages from "../../../firebase";
import { UserContext } from "../../../contexts/UserContext";
import { ScrollView } from "react-native-gesture-handler";

const Conversations = ({ navigation }) => {
  const { user } = useContext(UserContext);
  const [allMessages, setAllMessages] = useState(messages);
  useEffect(() => {
    setAllMessages(messages);
  }, [messages]);

  return (
    <ScrollView>
      <Text>Conversations</Text>

      {/* {messages.map((message, index) => (
        <View
          key={index}
          style={{ height: 50, backgroundColor: "#ddd", margin: 10 }}
        >
          <Text key={index}>{JSON.stringify(message.user)}</Text>
          <Text>{JSON.stringify(message)}</Text>
        </View>
      ))} */}
      <Text>{JSON.stringify(messages)}</Text>
      <Button title="Chat" onPress={() => navigation.navigate("Chat")} />
    </ScrollView>
  );
};

export default Conversations;
