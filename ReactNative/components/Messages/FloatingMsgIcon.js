import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { global } from "../../styles/globalStyles";

export default function FloatingMsgIcon() {
  return (
    <TouchableOpacity onPress={() => {}} style={global.floatingIcon}>
      <MaterialIcons name="message" size={30} color="white" />
    </TouchableOpacity>
  );
}
