import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

export default function ChatHeader({ item }) {
  const navigation = useNavigation();
  const RighContent = (props) => (
    <Text style={{ color: "gray" }}>
      {item.lastMessage && item.lastMessage.createdAt.toDate().toDateString()}
    </Text>
  );
  const LeftContent = (props) => (
    <Avatar.Image
      size={50}
      source={{ uri: `http://10.0.2.2:4000/` + item.userB.pictureURL }}
    />
  );
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Chat", {
          email: item.userB.email,
          name: item.userB.displayName,
          pictureURL: item.userB.pictureURL,
        })
      }
    >
      <Card>
        <Card.Title
          title={item.userB.displayName && item.userB.displayName}
          subtitle={item.lastMessage && item.lastMessage.text}
          left={LeftContent}
          right={RighContent}
          style={{ paddingRight: 30 }}
        />
      </Card>
    </TouchableOpacity>
  );
}
