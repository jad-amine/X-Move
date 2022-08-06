// Utilities
import React from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { global } from "../../styles/globalStyles";

export default function FloatingIcon({ setShowModal }) {
  return (
    <TouchableOpacity
      onPress={() => setShowModal(true)}
      style={global.floatingIcon}
    >
      <Feather name="plus" size={55} color="white" />
    </TouchableOpacity>
  );
}
