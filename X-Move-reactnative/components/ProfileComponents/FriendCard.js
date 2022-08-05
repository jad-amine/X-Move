import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function FriendCard({ friend }) {
  const navigation = useNavigation();

  const LeftContent = (props) =>
    friend.pictureURL ? (
      <Avatar.Image
        style={{ marginLeft: -10 }}
        size={55}
        source={{ uri: `http://192.168.1.3:4000/` + friend.pictureURL }}
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
        navigation.navigate("StackNavigator", {
          screen: "PlayerProfile",
          params: { user: friend },
        })
      }
    >
      <Card style={{ paddingLeft: 10 }}>
        <Card.Title
          title={friend.name}
          subtitle={friend.email}
          left={LeftContent}
          // right={RighContent}
          style={{ paddingRight: 30 }}
        />
      </Card>
    </TouchableOpacity>
  );
}
