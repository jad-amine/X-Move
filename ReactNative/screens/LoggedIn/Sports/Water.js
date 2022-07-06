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
        <FontAwesome5 name="swimmer" size={30} color="black" />
        <Text style={global.iconGap}>Swim</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <MaterialCommunityIcons name="surfing" size={30} color="black" />
        <Text style={global.iconGap}>Surf</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <MaterialCommunityIcons name="kitesurfing" size={30} color="black" />
        <Text style={global.iconGap}>KiteSurf</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <Image style={{ width: 30, height: 27 }} source={diving} />
        <Text style={global.iconGap}>Scuba-diving</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <MaterialCommunityIcons name="sail-boat" size={30} color="black" />
        <Text style={global.iconGap}>Sail</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <MaterialCommunityIcons name="kayaking" size={30} color="black" />
        <Text style={global.iconGap}>Kayak</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Water;
