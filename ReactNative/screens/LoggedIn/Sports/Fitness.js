import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { global } from "../../../styles/globalStyles";
import { FontAwesome5 } from "@expo/vector-icons";

const Fitness = () => {
  return (
    <View>
      <TouchableOpacity style={global.sportLayout}>
        <FontAwesome5 name="running" size={24} color="black" />
        <Text style={{ marginLeft: 30 }}>Run</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <FontAwesome5 name="hiking" size={24} color="black" />
        <Text style={{ marginLeft: 30 }}>Hike</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <FontAwesome5 name="dumbbell" size={24} color="black" />
        <Text style={{ marginLeft: 30 }}>Gym</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Fitness;
