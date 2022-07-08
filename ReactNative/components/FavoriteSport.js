import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useContext, useState } from "react";
import { global } from "../styles/globalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import PingPong from "../assets/PingPong.png";
import Tennis from "../assets/Tennis.png";
import diving from "../assets/Diving.png";
import { UserContext } from "../contexts/UserContext";

const FavoriteSport = ({ name, iconName, iconLibrary, image }) => {
  const { user, setUser } = useContext(UserContext);
  const sports = user.info.sports;
  const [liked, setLiked] = useState(sports.includes(name));

  const handlePress = async () => {
    try {
      const response = await fetch(
        "http://10.0.2.2:4000/api/users/" +
          (liked ? "removeSport" : "addSport"),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({ sport: name }),
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
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log("Request error", err);
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
