// Utilities
import API from "../../api";
import uuid from "react-native-uuid";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { global } from "../../styles/globalStyles";
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

export default function AddPost({ user, setShowModal, setPosts, posts }) {
  const [picture, setPicture] = useState();
  const [caption, setCaption] = useState();
  const id = uuid.v4();

  // Select picture
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

  // Add post
  const handlePress = async () => {
    if (!picture || !caption) {
      Alert.alert(
        `Please add a ${!picture ? "picture !" : "caption !"}`,
        ``,
        [
          {
            text: "Cancel",
            onPress: () => {},
          },
        ],
        { cancelable: true }
      );
    } else {
      const post = {
        picture: picture.base64,
        caption,
        id,
        createdAt: new Date(),
        name: user.info.name,
        playerPic: user.info.pictureURL,
      };

      // Save post
      try {
        const { data } = await API.post(
          `addPost`,
          { ...post },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        if (data.message === "Saved") {
          const newList = [...posts];
          newList.unshift(data.post);
          setPosts(newList);
          setShowModal(false);
        }
      } catch (error) {
        Alert.alert("Network Error !");
      }
    }
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
              style={global.postImage}
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
