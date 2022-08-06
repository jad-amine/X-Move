// Utilities
import React from "react";
import { formatDistance } from "date-fns";
import { Avatar, Card } from "react-native-paper";
import { global } from "../../styles/globalStyles";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ChatHeader({ item }) {
  const navigation = useNavigation();

  // Display last message time to the right of the card
  const RighContent = (props) => (
    <Text style={global.lastMessage}>
      {item.lastMessage &&
        formatDistance(
          new Date(item.lastMessage.createdAt.toDate()),
          new Date(),
          {
            addSuffix: true,
          }
        )}
    </Text>
  );

  // Display contact profile picture on the left side
  const LeftContent = (props) =>
    item.userB.pictureURL ? (
      <Avatar.Image
        style={global.userBPic}
        size={55}
        source={{ uri: `http://192.168.1.3:4000/` + item.userB.pictureURL }}
      />
    ) : (
      <Avatar.Icon
        size={55}
        icon="account"
        color="white"
        style={global.userBAvatar}
      />
    );

  return (
    <TouchableOpacity
      style={global.chats}
      onPress={() =>
        navigation.navigate("Chat", {
          email: item.userB.email,
          name: item.userB.displayName,
          pictureURL: item.userB.pictureURL,
        })
      }
    >
      <Card style={global.chatCard}>
        <Card.Title
          title={item.userB.displayName && item.userB.displayName}
          subtitle={item.lastMessage && item.lastMessage.text}
          left={LeftContent}
          right={RighContent}
          style={global.chatTitle}
        />
      </Card>
    </TouchableOpacity>
  );
}
