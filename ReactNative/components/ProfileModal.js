import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { BlurView } from "expo-blur";
import { global } from "../styles/globalStyles";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function ProfileModal() {
  const [about, setAbout] = useState("");

  return (
    <BlurView intensity={110} tint="dark" style={{ height: "100%" }}>
      <View style={global.modal}>
        <View style={global.modalHead}>
          <AntDesign name="close" size={30} color="black" />
          <Text style={global.modalTitle}>Edit Profile</Text>
        </View>
        <Text style={[global.modalTitle, { marginTop: 50 }]}>About Me: </Text>
        <TextInput
          multiline={true}
          style={global.modalInput}
          placeholder="about"
          value={about}
          onChangeText={setAbout}
        />
        <Text style={[global.modalTitle, { marginTop: 50 }]}>
          Change Location :
          <Entypo name="location" size={24} color="black" />
        </Text>
        <Text
          style={{
            alignSelf: "center",
            marginTop: 40,
            fontSize: 30,
            backgroundColor: "tomato",
            color: "white",
            paddingVertical: 6,
            paddingHorizontal: 50,
            borderRadius: 10,
          }}
        >
          Save
        </Text>
      </View>
    </BlurView>
  );
}
