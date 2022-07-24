import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { global } from "../../../../styles/globalStyles";
import { UserContext } from "../../../../contexts/UserContext";

const PlayerProfile = ({ route }) => {
  const { user, setUser } = useContext(UserContext);
  const player = route.params;
  const [isFriend, setIsFriend] = useState(
    user.info.friends.includes(player._id)
  );
  const handlePress = async () => {
    try {
      console.log("pressed");
      const response = await fetch("http://10.0.2.2:4000/api/users/addFriend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ id: player._id, isFriend }),
      });
      const json = await response.json();
      if (json.message === "Friend Added !") {
        let updatedUser = {
          token: user.token,
          info: {
            ...user.info,
            friends: [...user.info.friends, player._id],
            pendingFriendRequests: user.info.pendingFriendRequests.filter(
              (request) => request !== player._id
            ),
          },
        };
        console.log("Friend Added");
        setIsFriend(!isFriend);
        setUser(updatedUser);
      } else if (json.message === "Friend Request Sent !") {
        let updatedUser = {
          token: user.token,
          info: {
            ...user.info,
            friendRequests: [...user.info.friendRequests, player._id],
          },
        };
        console.log("Friend request sent !");
        setUser(updatedUser);
      } else {
        let updatedUser = {
          token: user.token,
          info: {
            ...user.info,
            friends: user.info.friends.filter(
              (friend) => player._id !== friend
            ),
          },
        };
        console.log("Friend Removed !");
        setIsFriend(!isFriend);
        setUser(updatedUser);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <View style={{ margin: 10, flexDirection: "row" }}>
        <Image
          source={{ uri: `http://10.0.2.2:4000/` + player.pictureURL }}
          style={{ height: 150, width: 150 }}
        />
        <View style={{ padding: 40, flex: 1 }}>
          <Text style={{ fontSize: 35 }}>{player.name}</Text>
          <Text style={{ color: "gray" }}>{player.email}</Text>
        </View>
      </View>
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          onPress={handlePress}
          style={{ ...global.PlayerProfileButton, backgroundColor: "#FF4D00" }}
          disabled={user.info.friendRequests.includes(player._id)}
        >
          <Text style={{ ...global.registerText, fontSize: 18 }}>
            {isFriend
              ? "REMOVE FRIEND"
              : user.info.friendRequests.includes(player._id)
              ? "Request Sent"
              : "ADD FRIEND"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("hi")}
          style={{
            ...global.PlayerProfileButton,
            backgroundColor: "#2C75E2",
          }}
        >
          <Text style={{ ...global.registerText, fontSize: 18 }}>CHAT</Text>
        </TouchableOpacity>
      </View>
      <Text style={global.about}>About</Text>
      <Text>{player.about}</Text>
    </>
  );
};

export default PlayerProfile;
