import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { global } from "../../../styles/globalStyles";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import PingPong from "../../../assets/PingPong.png";
import Tennis from "../../../assets/Tennis.png";
import { Ionicons } from "@expo/vector-icons";

const Winter = () => {
  return (
    <ScrollView style={{ marginBottom: 50 }}>
      <TouchableOpacity style={global.sportLayout}>
        <Ionicons name="football" size={30} color="black" />
        <Text style={global.iconGap}>Football</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <Ionicons name="basketball" size={30} color="black" />
        <Text style={global.iconGap}>Basketball</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <FontAwesome5 name="volleyball-ball" size={30} color="black" />
        <Text style={global.iconGap}>Volleyball</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <Ionicons name="american-football" size={30} color="black" />
        <Text style={global.iconGap}>Rugby</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <Image source={PingPong} style={{ width: 30, height: 30 }} />
        <Text style={global.iconGap}>Ping-Pong</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <Image source={Tennis} style={global.sportIcon} />
        <Text style={global.iconGap}>Tennis</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Winter;
