// Utilities
import API from "../api";
import Tennis from "../assets/Tennis.png";
import diving from "../assets/Diving.png";
import { Ionicons } from "@expo/vector-icons";
import PingPong from "../assets/PingPong.png";
import { AntDesign } from "@expo/vector-icons";
import { global } from "../styles/globalStyles";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";

const FavoriteSport = ({ name, iconName, iconLibrary, image }) => {
  const { user, setUser } = useContext(UserContext);
  const sports = user.info.sports;
  const [liked, setLiked] = useState(sports ? sports.includes(name) : null);

  // Add/Remove user favorite sport
  const handlePress = async () => {
    try {
      await API.post(
        liked ? "removeSport" : "addSport",
        { sport: name },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      if (liked) {
        setUser({
          info: {
            ...user.info,
            sports: user.info.sports.filter((sport) => sport !== name),
          },
          token: user.token,
        });
      } else {
        setUser({
          info: { ...user.info, sports: [...user.info.sports, name] },
          token: user.token,
        });
      }
      setLiked(!liked);
    } catch (err) {
      Alert.alert("Network error !");
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={global.sportTab}>
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
        ) : iconLibrary === "MaterialCommunityIcons" ? (
          <MaterialCommunityIcons name={iconName} size={30} color="black" />
        ) : iconLibrary === "MaterialIcons" ? (
          <MaterialIcons name={iconName} size={30} color="black" />
        ) : null}
        <Text style={global.iconGap}>{name}</Text>
      </View>
      <AntDesign
        name={liked ? "heart" : "hearto"}
        size={24}
        color={liked ? "red" : "black"}
      />
    </TouchableOpacity>
  );
};

export default FavoriteSport;
