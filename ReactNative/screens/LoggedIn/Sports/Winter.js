import React from "react";
import { Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { global } from "../../../styles/globalStyles";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Winter = () => {
  return (
    <ScrollView style={{ marginBottom: 50 }}>
      <TouchableOpacity style={global.sportLayout}>
        <FontAwesome5 name="skiing" size={30} color="black" />
        <Text style={global.iconGap}>Ski</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <FontAwesome5 name="snowboarding" size={30} color="black" />
        <Text style={global.iconGap}>Snowboard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <FontAwesome5 name="skating" size={30} color="black" />
        <Text style={global.iconGap}>Ice-Skate</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <MaterialCommunityIcons name="snowmobile" size={30} color="black" />
        <Text style={global.iconGap}>Ski-Doo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Winter;
