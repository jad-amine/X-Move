import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { global } from "../../../../styles/globalStyles";
import { UserContext } from "../../../../contexts/UserContext";

const PlayerProfile = ({ route }) => {
  const { user, setUser } = useContext(UserContext);
  const player = route.params;
  console.log(user);
  const handlePress = async () => {
    try {
      const response = await fetch("http://10.0.2.2:4000/api/users/addFriend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ id: player._id }),
      });
      const json = await response.json();
      let updatedUser;
      if (json.message === "Friend Added !") {
        updatedUser = {
          token: user.token,
          info: {
            ...user.info,
            friends: user.info.friends.push(player._id),
            pendingFriendRequests: user.info.pendingFriendRequests.filter(
              (request) => request !== player._id
            ),
          },
        };
        console.log(user, "added");
      } else {
        updatedUser = {
          token: user.token,
          info: {
            ...user.info,
            friendRequests: user.info.friendRequests.push(player._id),
          },
        };
        console.log(user, "friend request");
      }
      setUser(updatedUser);
    } catch (err) {
      console.log(err);
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
            {user.info.friends.includes(player._id)
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
