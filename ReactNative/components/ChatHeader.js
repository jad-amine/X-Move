import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { formatDistance } from "date-fns";
import { global } from "../styles/globalStyles";

export default function ChatHeader({ item }) {
  const navigation = useNavigation();
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
  const LeftContent = (props) =>
    item.userB.pictureURL ? (
      <Avatar.Image
        style={global.userBPic}
        size={55}
        source={{ uri: `http://10.0.2.2:4000/` + item.userB.pictureURL }}
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
