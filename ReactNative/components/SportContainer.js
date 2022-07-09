import { Text, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import { global } from "../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import Cycling from "../assets/Cycling-Background.png";
import Fitness from "../assets/Fitness-Background.png";
import Water from "../assets/Water-Background.png";
import Winter from "../assets/Winter-Background.png";
import Entertainment from "../assets/Entertainment-Background.png";
import Ball from "../assets/Ball-Background.png";

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
        <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
          {name} Sport
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default SportContainer;
