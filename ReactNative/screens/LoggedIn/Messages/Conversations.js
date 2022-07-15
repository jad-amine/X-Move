import { View, Text, Button } from "react-native";
import React from "react";

const Conversations = ({ navigation }) => {
  return (
    <View>
      <Text>Conversations</Text>
      <Button title="Chat" onPress={() => navigation.navigate("Chat")} />
    </View>
  );
};

export default Conversations;
