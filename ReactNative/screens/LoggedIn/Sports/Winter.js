import React from "react";
import { Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { global } from "../../../styles/globalStyles";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Winter = () => {
  return (
    <ScrollView style={{ marginBottom: 50 }}>
      <TouchableOpacity style={global.sportLayout}>
        <FontAwesome5 name="skiing" size={24} color="black" />
        <Text style={{ marginLeft: 30 }}>Ski</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <FontAwesome5 name="snowboarding" size={24} color="black" />
        <Text style={{ marginLeft: 30 }}>Snowboard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <FontAwesome5 name="skating" size={24} color="black" />
        <Text style={{ marginLeft: 30 }}>Ice-Skate</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <MaterialCommunityIcons name="snowmobile" size={24} color="black" />
        <Text style={{ marginLeft: 30 }}>Ski-Doo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Winter;
