import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { global } from "../../../styles/globalStyles";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Cycling = () => {
  return (
    <ScrollView>
      <TouchableOpacity style={global.sportLayout}>
        <MaterialCommunityIcons name="bike-fast" size={24} color="black" />
        <Text style={{ marginLeft: 30 }}>Road bike</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <MaterialIcons name="electric-bike" size={24} color="black" />
        <Text style={{ marginLeft: 30 }}>E-Bike</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <MaterialCommunityIcons name="skateboarding" size={24} color="black" />
        <Text style={{ marginLeft: 30 }}>SkateBoard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <MaterialCommunityIcons name="roller-skate" size={24} color="black" />
        <Text style={{ marginLeft: 30 }}>Roller-Skate</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Cycling;
