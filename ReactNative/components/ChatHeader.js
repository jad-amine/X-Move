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
  const LeftContent = (props) =>
    item.userB.pictureURL ? (
      <Avatar.Image
        style={{ marginLeft: -10 }}
        size={55}
        source={{ uri: `http://10.0.2.2:4000/` + item.userB.pictureURL }}
      />
    ) : (
      <Avatar.Icon
        size={55}
        icon="account"
        color="white"
        style={{ backgroundColor: "#ccc", marginLeft: -10 }}
      />
    );
  return (
    <TouchableOpacity
      style={{ marginVertical: 10 }}
      onPress={() =>
        navigation.navigate("Chat", {
          email: item.userB.email,
          name: item.userB.displayName,
          pictureURL: item.userB.pictureURL,
        })
      }
    >
      <Card style={{ paddingLeft: 10 }}>
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
