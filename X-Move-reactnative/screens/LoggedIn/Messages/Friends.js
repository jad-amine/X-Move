// Utilities
import React, { useContext } from "react";
import { Avatar, Card } from "react-native-paper";
import { global } from "../../../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import { FlatList, TouchableOpacity } from "react-native";
import { UserContext } from "../../../contexts/UserContext";

export default function Friends() {
  const { user } = useContext(UserContext);
  const navigation = useNavigation();

  return (
    <FlatList
      style={global.friendsList}
      data={user.info.friends}
      keyExtractor={(_, i) => i}
      renderItem={({ item }) => {
        const LeftContent = (props) =>
          item.pictureURL ? (
            <Avatar.Image
              style={global.userBPic}
              size={55}
              source={{ uri: `http://192.168.1.3:4000/` + item.pictureURL }}
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
                email: item.email,
                name: item.name,
                pictureURL: item.pictureURL,
              })
            }
          >
            <Card style={global.chatCard}>
              <Card.Title
                title={item.name}
                left={LeftContent}
                style={global.chatTitle}
              />
            </Card>
          </TouchableOpacity>
        );
      }}
    />
  );
}
