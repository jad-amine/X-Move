// Utilities
import React from "react";
import { TouchableOpacity } from "react-native";
import { global } from "../../styles/globalStyles";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function FloatingMsgIcon() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Friends")}
      style={global.floatingIcon}
    >
      <MaterialIcons name="message" size={30} color="white" />
    </TouchableOpacity>
  );
}
