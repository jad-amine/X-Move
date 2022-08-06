// Utilities
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { global } from "../styles/globalStyles";
import { FontAwesome } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";

const UploadProfilePic = ({ pickImage }) => {
  return (
    <View>
      <TouchableOpacity style={global.profilePic} onPress={pickImage}>
        <FontAwesome
          style={global.profileIcon}
          name="user"
          size={50}
          color="gray"
        />
        <Entypo
          style={global.cameraIcon}
          name="camera"
          size={24}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

export default UploadProfilePic;
