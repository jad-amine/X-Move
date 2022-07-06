import React from "react";
import { Text, TouchableOpacity, ScrollView } from "react-native";
import { global } from "../../../styles/globalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Cycling = () => {
  return (
    <ScrollView>
      <TouchableOpacity style={global.sportLayout}>
        <MaterialCommunityIcons name="bike-fast" size={30} color="black" />
        <Text style={global.iconGap}>Road bike</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <MaterialIcons name="electric-bike" size={30} color="black" />
        <Text style={global.iconGap}>E-Bike</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <MaterialCommunityIcons name="skateboarding" size={30} color="black" />
        <Text style={global.iconGap}>SkateBoard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <MaterialCommunityIcons name="roller-skate" size={30} color="black" />
        <Text style={global.iconGap}>Roller-Skate</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Cycling;
