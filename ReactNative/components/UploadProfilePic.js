import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { global } from "../styles/globalStyles";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const UploadProfilePic = ({ pickImage }) => {
  return (
    <View>
      <TouchableOpacity style={global.profilePic} onPress={pickImage}>
        <FontAwesome
          style={{ alignSelf: "center" }}
          name="user"
          size={50}
          color="gray"
        />
        <Entypo
          style={{ padding: 5, borderRadius: 20 }}
          name="camera"
          size={24}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

export default UploadProfilePic;
