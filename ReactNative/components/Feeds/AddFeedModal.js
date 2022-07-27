import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { global } from "../../styles/globalStyles";
import * as ImagePicker from "expo-image-picker";

export default function AddFeedModal({ user, setShowModal }) {
  const pickImage = async () => {
    // No permissions request needed for launching the phone gallery
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    if (result.cancelled) return;
    try {
      const response = await fetch("http://10.0.2.2:4000/api/users/addPost", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(post),
      });
      const data = await response.json();
      setUser({
        info: {
          ...user.info,
          pictureURL: `/Images/ProfilePictures/${user.info.email}.png`,
        },
        token: user.token,
      });
    } catch (err) {
      console.log("request error ==>", err);
    }
  };

  const discard = () => {
    Alert.alert(
      "Discard Changes ?",
      "Are you sure you want to discard changes ?",
      [
        {
          text: "Cancel",
          onPress: () => {},
        },
        { text: "Yes", onPress: () => setShowModal(false) },
      ]
    );
  };

  return (
    <View style={global.friendModal}>
      <View style={global.modalHead}>
        <AntDesign name="arrowleft" size={30} color="black" onPress={discard} />
      </View>
      <TouchableOpacity onPress={pickImage}>
        <Image
          source={{ uri: `http://10.0.2.2:4000/` + user.info.pictureURL }}
          style={{ height: 200, width: 200 }}
        />
      </TouchableOpacity>
    </View>
  );
}
