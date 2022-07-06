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
        <Ionicons name="football" size={24} color="black" />
        <Text style={{ marginLeft: 30 }}>Football</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <Ionicons name="basketball" size={24} color="black" />
        <Text style={{ marginLeft: 30 }}>Basketball</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <FontAwesome5 name="volleyball-ball" size={24} color="black" />
        <Text style={{ marginLeft: 30 }}>Volleyball</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <Ionicons name="american-football" size={24} color="black" />
        <Text style={{ marginLeft: 30 }}>Rugby</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <Image source={PingPong} style={{ width: 25, height: 25 }} />
        <Text style={{ marginLeft: 30 }}>Ping-Pong</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <Image source={Tennis} style={global.sportIcon} />
        <Text style={{ marginLeft: 30 }}>Tennis</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Winter;
