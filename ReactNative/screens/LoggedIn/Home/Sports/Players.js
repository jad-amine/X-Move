import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { global } from "../../../../styles/globalStyles";

const Players = ({ route }) => {
  const [users, setUsers] = useState(null);
  const { user } = useContext(UserContext);
  const sport = route.params;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const resonse = await fetch(
          "http://10.0.2.2:4000/api/users/getSimilarUsers/" + sport,
          {
            headers: {
              authorization: `Bearer ${user.token}`,
            },
          }
        );
        const data = await resonse.json();
        setUsers(data);
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
            <Image
              source={{ uri: `data:image/gif;base64,${user.picture}` }}
              style={{ height: 150, width: 150, borderRadius: 20 }}
            />
            <View style={{ marginLeft: 40 }}>
              <Text style={{ fontSize: 30 }}>{user.name}</Text>
              <Text style={{ color: "gray" }}>{user.email}</Text>
              <TouchableOpacity
                style={{
                  alignContent: "center",
                  marginTop: 20,
                  backgroundColor: "#2C75E2",
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                  borderRadius: 6,
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>Chat</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
    </ScrollView>
  );
};

export default Players;
