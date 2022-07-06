import { View, Text } from "react-native";
import React from "react";

const Sport = ({ route }) => {
  const sports = route.params;

  return (
    <View>
      <Text>Sport</Text>
      <Text>{JSON.stringify(sports)}</Text>
    </View>
  );
};

export default Sport;
