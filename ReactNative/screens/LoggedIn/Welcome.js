import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { global } from "../../styles/globalStyles";
const Welcome = () => {
  return (
    <View>
      <View style={global.welcomeContainer}>
        <TouchableOpacity style={global.sportsCategories}>
          <Text>Fitness Sports</Text>
        </TouchableOpacity>
        <TouchableOpacity style={global.sportsCategories}>
          <Text>Cycling Sports</Text>
        </TouchableOpacity>
        <TouchableOpacity style={global.sportsCategories}>
          <Text>Water Sports</Text>
        </TouchableOpacity>
        <TouchableOpacity style={global.sportsCategories}>
          <Text>Winter Sports</Text>
        </TouchableOpacity>
        <TouchableOpacity style={global.sportsCategories}>
          <Text>Water Sports</Text>
        </TouchableOpacity>
        <TouchableOpacity style={global.sportsCategories}>
          <Text>Winter Sports</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
