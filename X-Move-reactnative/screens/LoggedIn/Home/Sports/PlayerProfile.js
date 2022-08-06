// Utilities
import API from "../../../../api";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Chip, Divider } from "react-native-paper";
import React, { useContext, useEffect } from "react";
import { global } from "../../../../styles/globalStyles";
import { UserContext } from "../../../../contexts/UserContext";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

// Component
import PostCard from "../../../../components/Feeds/PostCard";

const PlayerProfile = ({ route }) => {
  const { user, setUser } = useContext(UserContext);
  var player;
  if (route.params.user) {
    player = route.params.user;
  } else {
    player = route.params;
  }
  // Check if the users are already friends
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

  // Friend Request button
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
        // Other user already added him
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
        // Friend request sent
        let updatedUser = {
          token: user.token,
          info: {
            ...user.info,
            friendRequests: [...user.info.friendRequests, player],
          },
        };
        setUser(updatedUser);
      } else if (data === "Removed") {
        // Removed user from friends list
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
      Alert.alert("Network error !");
    }
  };

  return (
    <ScrollView style={global.profileMargin}>
      <View style={global.playerProfileHead}>
        <Image
          source={{ uri: `http://192.168.1.3:4000/` + player.pictureURL }}
          style={global.playerPicture}
        />
        <View style={global.playerInfo}>
          <Text style={global.playerName}>{player.name}</Text>
          <Text style={global.playerEmail}>{player.email}</Text>
        </View>
      </View>
      <View style={global.playerProfileNavigation}>
        <TouchableOpacity
          onPress={handlePress}
          style={{ ...global.playerProfileButton, backgroundColor: "#FF4D00" }}
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
          onPress={() => {}}
          style={{
            ...global.playerProfileButton,
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
