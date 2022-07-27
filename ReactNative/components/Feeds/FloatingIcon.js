import { TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function FloatingIcon({ setShowModal }) {
  const navigation = useNavigation();
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
        borderColor: "tomato",
        backgroundColor: "tomato",
        borderWidth: 2,
      }}
    >
      <Feather name="plus" size={50} color="white" />
    </TouchableOpacity>
  );
}
