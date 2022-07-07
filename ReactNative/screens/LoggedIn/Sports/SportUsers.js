import { View, Text } from "react-native";
import React from "react";

const SportUsers = ({ route }) => {
  const sport = route.params;
  return (
    <View>
      <Text>SportUsers {sport}</Text>
    </View>
  );
};

export default SportUsers;
