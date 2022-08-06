// Utilities
import React from "react";
import Water from "../assets/water.png";
import Winter from "../assets/winter.png";
import { global } from "../styles/globalStyles";
import Ball from "../assets/Ball-Background.png";
import Fitness from "../assets/Fitness-Background.png";
import Cycling from "../assets/Cycling-Background.png";
import { useNavigation } from "@react-navigation/native";
import Entertainment from "../assets/EntertainmentPic.png";
import { Text, TouchableOpacity, ImageBackground } from "react-native";

const SportContainer = ({ name }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(name)}>
      <ImageBackground
        resizeMode="cover"
        style={global.sportImage}
        source={
          name === "Cycling"
            ? Cycling
            : name === "Fitness"
            ? Fitness
            : name === "Water"
            ? Water
            : name === "Winter"
            ? Winter
            : name === "Entertainment"
            ? Entertainment
            : name === "Ball"
            ? Ball
            : ""
        }
      >
        <Text style={global.sportContainerText}>{name} Sports</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default SportContainer;
