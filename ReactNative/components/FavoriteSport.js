import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { global } from "../styles/globalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import PingPong from "../assets/PingPong.png";
import Tennis from "../assets/Tennis.png";
import diving from "../assets/Diving.png";

const FavoriteSport = ({ name, iconName, iconLibrary, image }) => {
  return (
    <TouchableOpacity
      onPress={() => navigateToSport("Football")}
      style={global.sportTab}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {iconLibrary === "Ionicons" ? (
          <Ionicons name={iconName} size={30} color="black" />
        ) : iconLibrary === "FontAwesome5" ? (
          <FontAwesome5 name={iconName} size={30} color="black" />
        ) : image === "PingPong" ? (
          <Image source={PingPong} style={{ width: 30, height: 30 }} />
        ) : image === "Tennis" ? (
          <Image source={Tennis} style={{ width: 30, height: 30 }} />
        ) : image === "diving" ? (
          <Image source={diving} style={{ width: 30, height: 30 }} />
        ) : (
          (iconLibrary = "MaterialCommunityIcons" ? (
            <MaterialCommunityIcons name={iconName} size={30} color="black" />
          ) : null)
        )}
        <Text style={global.iconGap}>{name}</Text>
      </View>
      <AntDesign name="heart" size={24} color="red" />
    </TouchableOpacity>
  );
};

export default FavoriteSport;
