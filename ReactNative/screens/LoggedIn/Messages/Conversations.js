import { View, Text, Button } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import messages from "../../../firebase";
import { UserContext } from "../../../contexts/UserContext";
import { ScrollView } from "react-native-gesture-handler";

const Conversations = ({ navigation }) => {
  const { user } = useContext(UserContext);
  return (
    <ScrollView>
      <Text>Conversations</Text>
      <Button title="Chat" onPress={() => navigation.navigate("Chat")} />
    </ScrollView>
  );
};

export default Conversations;
