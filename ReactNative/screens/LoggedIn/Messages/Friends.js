import { FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { Avatar, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { global } from "../../../styles/globalStyles";

export default function Friends() {
  const navigation = useNavigation();
  const { user } = useContext(UserContext);

  return (
    <FlatList
      style={{ flex: 1, padding: 10 }}
      data={user.info.friends}
      keyExtractor={(_, i) => i}
      renderItem={({ item }) => {
        const LeftContent = (props) =>
          item.pictureURL ? (
            <Avatar.Image
              style={global.userBPic}
              size={55}
              source={{ uri: `http://10.0.2.2:4000/` + item.pictureURL }}
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
