import { View, Text, Button, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { ScrollView } from "react-native-gesture-handler";
import { MessagesContext } from "../../../contexts/MessagesContext";
import ChatHeader from "../../../components/ChatHeader";

const Conversations = ({ navigation }) => {
  const { user } = useContext(UserContext);
  const { rooms } = useContext(MessagesContext);
  const [chats, setChats] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      console.log(rooms);
    }, 1000);
    setChats(rooms ? rooms.filter((room) => !room.lastmessage) : null);
  }, [rooms]);
  return (
    <FlatList
      style={{ flex: 1, padding: 10 }}
      data={chats}
      keyExtractor={(_, i) => i}
      renderItem={({ item }) => <ChatHeader item={item} />}
    />
  );
};

export default Conversations;
