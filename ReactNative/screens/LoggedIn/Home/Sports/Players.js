import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { global } from "../../../../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-paper";
import API from "../../../../api";

const Players = ({ route }) => {
  const [users, setUsers] = useState(null);
  const { user } = useContext(UserContext);
  const navigation = useNavigation();
  const sport = route.params;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await API.get("getSimilarUsers/" + sport, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        setUsers(data.filter((player) => player.email !== user.info.email));
      } catch (err) {
        console.log("Request Error", err);
      }
    };
    fetchUsers();
  }, []);

  return (
    <ScrollView style={{ marginBottom: 30 }}>
      {users &&
        users.map((user, index) => (
          <View key={index} style={global.playerCard}>
            {user.pictureURL ? (
              <Image
                source={{ uri: `http://192.168.1.3:4000/` + user.pictureURL }}
                style={{ height: 150, width: 150, borderRadius: 20 }}
              />
            ) : (
              <Avatar.Icon
                size={150}
                icon="account"
                color="white"
                style={{ backgroundColor: "#ccc" }}
              />
            )}
            <View style={{ marginLeft: 40 }}>
              <Text style={{ fontSize: 30 }}>{user.name}</Text>
              <Text style={{ color: "gray" }}>{user.email}</Text>

              <View style={{ flexDirection: "row" }}>
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
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Chat
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("PlayerProfile", user)}
                  style={global.viewProfileButton}
                >
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    View Profile
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
    </ScrollView>
  );
};

export default Players;
