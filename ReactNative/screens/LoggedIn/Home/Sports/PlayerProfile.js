import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import { global } from "../../../../styles/globalStyles";
import { UserContext } from "../../../../contexts/UserContext";
import { useEffect } from "react";
import { Chip, Divider } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import PostCard from "../../../../components/Feeds/PostCard";
import API from "../../../../api";

const PlayerProfile = ({ route }) => {
  const { user, setUser } = useContext(UserContext);
  var player;
  if (route.params.user) {
    player = route.params.user;
  } else {
    player = route.params;
  }
  let isFriend = false;
  user.info.friends.forEach((friend) => {
    if (friend._id === player._id) {
      isFriend = true;
    }
  });
  let isAdded = false;
  user.info.friendRequests.forEach((friend) => {
    if (friend._id === player._id) {
      isAdded = true;
    }
  });
  useEffect(() => {}, [user]);

  const handlePress = async () => {
    try {
      const { data } = await API.post(
        "addFriend",
        { id: player._id, isFriend },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      if (data.message === "Added") {
        let updatedUser = {
          token: user.token,
          info: {
            ...user.info,
            friends: [...user.info.friends, player],
            pendingFriendRequests: [
              ...user.info.pendingFriendRequests.filter(
                (friend) => friend._id !== player._id
              ),
            ],
          },
        };
        setUser(updatedUser);
      } else if (data.message === "Friend Request Sent !") {
        let updatedUser = {
          token: user.token,
          info: {
            ...user.info,
            friendRequests: [...user.info.friendRequests, player],
          },
        };
        setUser(updatedUser);
      } else if (data === "Removed") {
        let updatedUser = {
          token: user.token,
          info: {
            ...user.info,
            friends: [
              ...user.info.friends.filter(
                (friend) => friend._id !== player._id
              ),
            ],
          },
        };
        setUser(updatedUser);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ScrollView style={{ padding: 10 }}>
      <View style={{ margin: 10, flexDirection: "row" }}>
        <Image
          source={{ uri: `http://192.168.1.3:4000/` + player.pictureURL }}
          style={{ height: 150, width: 150, borderRadius: 10 }}
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
          disabled={isAdded}
        >
          <Text style={{ ...global.registerText, fontSize: 18 }}>
            {isFriend
              ? "REMOVE FRIEND"
              : isAdded
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
      <View>
        <View style={global.aboutIcon}>
          <AntDesign name="infocirlceo" size={24} color="rgb(88, 89, 88)" />
          <Text style={global.aboutWord}>About: </Text>
        </View>
        <Text style={global.aboutPlayer}>{player.about}</Text>
        <Divider style={global.divider} />
        <View style={global.aboutIcon}>
          <Fontisto name="favorite" size={24} color="rgb(88, 89, 88)" />
          <Text style={global.aboutWord}>Hobbies and interests </Text>
        </View>
        <View style={global.sportsList}>
          {player.sports &&
            player.sports.map((sport, index) => (
              <Chip
                style={{ backgroundColor: "#ff4D00", margin: 5 }}
                key={index}
              >
                <Text style={{ color: "white" }}>{sport}</Text>
              </Chip>
            ))}
        </View>
        <Divider style={global.divider} />
        <View style={global.postSection}>
          <Fontisto name="favorite" size={24} color="rgb(88, 89, 88)" />
          <Text style={global.aboutWord}>Posts </Text>
        </View>
        <View style={{ marginBottom: 25 }}>
          {player.posts &&
            player.posts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default PlayerProfile;
