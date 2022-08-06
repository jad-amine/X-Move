// Utilities
import React from "react";
import { TouchableOpacity } from "react-native";
import { Avatar, Card } from "react-native-paper";
import { global } from "../../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";

export default function FriendCard({ friend }) {
  const navigation = useNavigation();

  // Display friend profile pic at the top-left of the card or icon if no profile pic added
  const LeftContent = (props) =>
    friend.pictureURL ? (
      <Avatar.Image
        style={global.postPlayerPic}
        size={55}
        source={{ uri: `http://192.168.1.3:4000/` + friend.pictureURL }}
      />
    ) : (
      <Avatar.Icon
        size={55}
        icon="account"
        color="white"
        style={global.friendAvatar}
      />
    );

  return (
    <TouchableOpacity
      style={global.friendCard}
      onPress={() =>
        navigation.navigate("StackNavigator", {
          screen: "PlayerProfile",
          params: { user: friend },
        })
      }
    >
      <Card style={global.friendCardPadding}>
        <Card.Title
          title={friend.name}
          subtitle={friend.email}
          left={LeftContent}
          style={global.friendName}
        />
      </Card>
    </TouchableOpacity>
  );
}
