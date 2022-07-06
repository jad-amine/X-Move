import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { global } from "../../../styles/globalStyles";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import diving from "../../../assets/Diving.png";

const Water = () => {
  return (
    <ScrollView style={{ marginBottom: 50 }}>
      <TouchableOpacity style={global.sportLayout}>
        <FontAwesome5 name="swimmer" size={24} color="black" />
        <Text style={{ marginLeft: 30 }}>Swim</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <MaterialCommunityIcons name="surfing" size={26} color="black" />
        <Text style={{ marginLeft: 30 }}>Surf</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <MaterialCommunityIcons name="kitesurfing" size={26} color="black" />
        <Text style={{ marginLeft: 30 }}>KiteSurf</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <Image style={{ width: 30, height: 27 }} source={diving} />
        <Text style={{ marginLeft: 30 }}>Scuba-diving</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <MaterialCommunityIcons name="sail-boat" size={24} color="black" />
        <Text style={{ marginLeft: 30 }}>Sail</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <MaterialCommunityIcons name="kayaking" size={26} color="black" />
        <Text style={{ marginLeft: 30 }}>Kayak</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Water;
