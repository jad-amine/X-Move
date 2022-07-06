import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { global } from "../../../styles/globalStyles";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Fitness = () => {
  return (
    <ScrollView>
      <TouchableOpacity style={global.sportLayout}>
        <FontAwesome5 name="running" size={30} color="black" />
        <Text style={global.iconGap}>Run</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <FontAwesome5 name="hiking" size={30} color="black" />
        <Text style={global.iconGap}>Hike</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <FontAwesome5 name="dumbbell" size={30} color="black" />
        <Text style={global.iconGap}>Gym</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <MaterialCommunityIcons name="dance-ballroom" size={30} color="black" />
        <Text style={global.iconGap}>Dance</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <MaterialCommunityIcons name="yoga" size={30} color="black" />
        <Text style={global.iconGap}>Yoga</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Fitness;
