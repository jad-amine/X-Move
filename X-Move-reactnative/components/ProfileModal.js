// Utilities
import API from "../api";
import { BlurView } from "expo-blur";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { global } from "../styles/globalStyles";
import { View, Text, TextInput, Alert } from "react-native";

// Component
import ViewLocation from "./ViewLocation";

export default function ProfileModal({ user, setUser, setModalVisible }) {
  const [about, setAbout] = useState(user.info.about);
  const [showMap, setShowMap] = useState(false);
  const [location, setLocation] = useState(null);

  // Update profile information
  const handlePress = async () => {
    if (about === user.info.about && !location) {
      return;
    }
    try {
      await API.post(
        "updateProfile",
        { about: about, location: location },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      location
        ? setUser({
            info: { ...user.info, location: location, about: about },
            token: user.token,
          })
        : setUser({ info: { ...user.info, about: about }, token: user.token });
      setModalVisible(false);
    } catch (error) {
      Alert.alert("Network Error !");
    }
  };

  if (!showMap) {
    return (
      <BlurView intensity={110} tint="dark" style={global.blur}>
        <View style={global.modal}>
          <View style={global.modalHead}>
            <AntDesign
              name="close"
              size={30}
              color="black"
              onPress={() => setModalVisible(false)}
            />
            <Text style={global.modalTitle}>Edit Profile</Text>
          </View>
          <Text style={[global.modalTitle, global.profileSpace]}>
            About Me:{" "}
          </Text>
          <TextInput
            multiline={true}
            style={global.modalInput}
            placeholder="about"
            value={about}
            onChangeText={setAbout}
          />
          <Text
            style={[global.modalTitle, global.profileSpace]}
            onPress={() => setShowMap(!showMap)}
          >
            {user.info.location ? "Change Location  " : "Add Location  "}
            <Entypo name="location" size={24} color="black" />
          </Text>
          <Button style={global.saveAbout} onPress={handlePress}>
            <Text style={global.saveBttn}>Save</Text>
          </Button>
        </View>
      </BlurView>
    );
  }

  return (
    <ViewLocation
      location={location}
      setLocation={setLocation}
      setShowMap={setShowMap}
    />
  );
}
