import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { global } from "../../../styles/globalStyles";

const SportUsers = ({ route }) => {
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
        console.log(data);
      } catch (err) {
        console.log("Request Error", err);
      }
    };
    fetchUsers();
    console.log("hi");
  }, []);

  return (
    <View>
      <Text> {sport} Players </Text>
      {users &&
        users.map((user, index) => (
          <View key={index} style={global.playerCard}>
            <Text>{user.name}</Text>
            <Text>{user.email}</Text>
          </View>
        ))}
    </View>
  );
};

export default SportUsers;
