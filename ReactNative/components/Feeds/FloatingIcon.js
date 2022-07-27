import { TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

export default function FloatingIcon({ setShowModal }) {
  return (
    <TouchableOpacity
      onPress={() => setShowModal(true)}
      style={{
        position: "absolute",
        right: 40,
        bottom: 40,
        borderRadius: 60,
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF4D00",
      }}
    >
      <Feather name="plus" size={55} color="white" />
    </TouchableOpacity>
  );
}
