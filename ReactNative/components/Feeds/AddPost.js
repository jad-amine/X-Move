import {
  View,
  TouchableOpacity,
  Image,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Text,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { global } from "../../styles/globalStyles";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import uuid from "react-native-uuid";

export default function AddPost({ user, setShowModal }) {
  const [picture, setPicture] = useState();
  const [caption, setCaption] = useState();
  const id = uuid.v4();

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
    setPicture(result);
  };

  const discard = () => {
    Alert.alert(
      "Discard Changes ?",
      "",
      [
        {
          text: "Cancel",
          onPress: () => {},
        },
        { text: "Yes", onPress: () => setShowModal(false) },
      ],
      { cancelable: true }
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={global.feedModal}>
        <View style={global.modalHead}>
          <AntDesign
            name="arrowleft"
            size={30}
            color="black"
            onPress={discard}
          />
          <Text style={global.modalTitle}>Create Post</Text>
        </View>
        <TouchableOpacity style={global.picture} onPress={pickImage}>
          {picture ? (
            <Image
              source={{ uri: "data:image/png;base64," + picture.base64 }}
              style={{ height: 400, width: "100%" }}
            />
          ) : (
            <View style={global.pictureInput}>
              <Ionicons name="images-outline" size={200} color="#ccc" />
            </View>
          )}
        </TouchableOpacity>
        <TextInput
          style={global.caption}
          label="Add Caption..."
          value={caption}
          onChangeText={setCaption}
        />
        <TouchableOpacity onPress={handlePress} style={global.post}>
          <Text style={global.postText}>Post</Text>
        </TouchableOpacity>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
