import { Text, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import { global } from "../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import Fitness from "../assets/Fitness-Background.png";
import Cycling from "../assets/Cycling-Background.png";
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
        <Text
          style={{
            marginLeft: 10,
            color: "white",
            fontSize: 27,
            fontWeight: "bold",
          }}
        >
          {name} Sports
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default SportContainer;
