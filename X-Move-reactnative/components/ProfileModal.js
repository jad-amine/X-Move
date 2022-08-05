import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { BlurView } from "expo-blur";
import { global } from "../styles/globalStyles";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ViewLocation from "./ViewLocation";
import { Button } from "react-native-paper";
import API from "../api";

export default function ProfileModal({ user, setUser, setModalVisible }) {
  const [about, setAbout] = useState(user.info.about);
  const navigation = useNavigation();
  const [showMap, setShowMap] = useState(false);
  const [location, setLocation] = useState(null);
  useEffect(() => {
    console.log(user);
  });
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
      console.log(error, error.message);
    }
  };

  if (!showMap) {
    return (
      <BlurView intensity={110} tint="dark" style={{ height: "100%" }}>
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
          <Text style={[global.modalTitle, { marginTop: 50 }]}>About Me: </Text>
          <TextInput
            multiline={true}
            style={global.modalInput}
            placeholder="about"
            value={about}
            onChangeText={setAbout}
          />
          <Text
            style={[global.modalTitle, { marginTop: 50 }]}
            onPress={() => setShowMap(!showMap)}
          >
            {user.info.location ? "Change Location  " : "Add Location  "}
            <Entypo name="location" size={24} color="black" />
          </Text>
          <Button style={global.saveAbout} onPress={handlePress}>
            <Text style={{ color: "white", fontSize: 16 }}>Save</Text>
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
