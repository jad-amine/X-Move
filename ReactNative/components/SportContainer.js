import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { global } from "../styles/globalStyles";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SportContainer = ({ icon, library, name }) => {
  const navigation = useNavigation();
  let sports;
  if (name === "Fitness") {
    sports = ["Running", "Hiking", "Gym"];
  } else if (name === "Ball") {
    sports = ["Football", "Basketball", "Rugbt", "Ping-Pong", "Tennis"];
  } else if (name === "Cycle") {
    sports = ["Mountain Bike", "Road Bike", "Skateboard", "Rollers", "E-Bike"];
  } else if (name === "Winter") {
    sports = ["Ski", "Snowboard", "Ice Skate"];
  } else if (name === "Water") {
    sports = ["Swim", "Surf", "Kayak", "WindSurf", "KiteSurf"];
  } else {
    sports = ["Yoga", "Gymnastic", "Dance", "Pilates"];
  }
  return (
    <View style={global.sportsContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Sport", sports);
        }}
        style={global.sportsCategories}
      >
        {library === "MaterialCommunityIcons" ? (
          <MaterialCommunityIcons name={icon} size={70} color="tomato" />
        ) : library === "FontAwesome" ? (
          <FontAwesome name={icon} size={70} color="tomato" />
        ) : library === "FontAwesome5" ? (
          <FontAwesome5 name={icon} size={70} color="tomato" />
        ) : (
          ""
        )}
      </TouchableOpacity>
      <Text>{name} Sports</Text>
    </View>
  );
};

export default SportContainer;
