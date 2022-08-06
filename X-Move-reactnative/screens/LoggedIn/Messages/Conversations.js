// Utilities
import { FlatList } from "react-native";
import { global } from "../../../styles/globalStyles";
import { ScrollView } from "react-native-gesture-handler";
import React, { useContext, useEffect, useState } from "react";
import { MessagesContext } from "../../../contexts/MessagesContext";

// Components
import ChatHeader from "../../../components/Messages/ChatHeader";
import FloatingMsgIcon from "../../../components/Messages/FloatingMsgIcon";

const Conversations = ({ navigation }) => {
  const [chats, setChats] = useState(null);
  const { rooms } = useContext(MessagesContext);

  useEffect(() => {
    // Only display rooms with at least a message in it
    const activeChats = rooms?.filter((room) => !room.lastmessage);
    setChats(activeChats);
  }, [rooms]);

  return (
    <>
      <FlatList
        style={global.chatsList}
        data={chats}
        keyExtractor={(_, i) => i}
        renderItem={({ item }) => <ChatHeader item={item} />}
      />
      <FloatingMsgIcon />
    </>
  );
};

export default Conversations;
