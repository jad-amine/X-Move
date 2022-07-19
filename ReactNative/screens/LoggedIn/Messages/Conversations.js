import { View, Text, Button, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { ScrollView } from "react-native-gesture-handler";
import { MessagesContext } from "../../../contexts/MessagesContext";

const Conversations = ({ navigation }) => {
  const { user } = useContext(UserContext);
  const { rooms } = useContext(MessagesContext);
  const [chats, setChats] = useState(null);
  useEffect(() => {
    setChats(rooms.filter((room) => !room.lastmessage));
  }, []);
  return (
    // <FlatList
    <ScrollView>
      <Text>Conversations</Text>
      <Text>{JSON.stringify(chats)}</Text>
      {/* <Button title="Chat" onPress={() => navigation.navigate("Chat")} /> */}
    </ScrollView>
  );
};

export default Conversations;
