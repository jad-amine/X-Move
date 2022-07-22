import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { global } from "../../../../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";

const Players = ({ route }) => {
  const [users, setUsers] = useState(null);
  const { user } = useContext(UserContext);
  const navigation = useNavigation();
  const sport = route.params;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "http://10.0.2.2:4000/api/users/getSimilarUsers/" + sport,
          {
            headers: {
              authorization: `Bearer ${user.token}`,
            },
          }
        );
        const data = await response.json();
        setUsers(data);
        console.log(data);
      } catch (err) {
        console.log("Request Error", err);
      }
    };
    fetchUsers();
  }, []);

  return (
    <ScrollView>
      {users &&
        users.map((user, index) => (
          <View key={index} style={global.playerCard}>
            {user.pictureURL ? (
              <Image
                source={{ uri: `http://10.0.2.2:4000/` + user.pictureURL }}
                style={{ height: 150, width: 150, borderRadius: 20 }}
              />
            ) : (
              <Text> No profile picture</Text>
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
                      params: { email: user.email, name: user.name },
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
