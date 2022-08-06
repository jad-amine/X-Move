// Utilities
import API from "../../../../api";
import { Avatar } from "react-native-paper";
import { global } from "../../../../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../../../contexts/UserContext";
import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

const Players = ({ route }) => {
  const sport = route.params;
  const navigation = useNavigation();
  const { user } = useContext(UserContext);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    // Get users with similar sport interest
    const fetchUsers = async () => {
      try {
        const { data } = await API.get("getSimilarUsers/" + sport, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        setUsers(data.filter((player) => player.email !== user.info.email));
      } catch (err) {
        Alert.alert("Network error !");
      }
    };
    fetchUsers();
  }, []);

  return (
    <ScrollView style={global.playersScreen}>
      {users &&
        users.map((user, index) => (
          <View key={index} style={global.playerCard}>
            {user.pictureURL ? (
              <Image
                source={{ uri: `http://192.168.1.3:4000/` + user.pictureURL }}
                style={global.playerAvatar}
              />
            ) : (
              <Avatar.Icon
                size={150}
                icon="account"
                color="white"
                style={{ backgroundColor: "#ccc" }}
              />
            )}
            <View style={global.playerInfoSection}>
              <Text style={global.playerInfoName}>{user.name}</Text>
              <Text style={global.playerInfoEmail}>{user.email}</Text>

              <View style={global.navigationButtons}>
                <TouchableOpacity
                  style={global.chatButton}
                  onPress={() =>
                    navigation.navigate("Messages", {
                      screen: "Chat",
                      params: {
                        email: user.email,
                        name: user.name,
                        pictureURL: user.pictureURL,
                      },
                    })
                  }
                >
                  <Text style={global.navigationText}>Chat</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("PlayerProfile", user)}
                  style={global.viewProfileButton}
                >
                  <Text style={global.navigationViewProfile}>View Profile</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
    </ScrollView>
  );
};

export default Players;
