import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { BlurView } from "expo-blur";
import { global } from "../styles/globalStyles";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

export default function MapModal({ setModalVisible, setSearch }) {
  const [showPlayers, setShowPlayers] = useState(true);
  const [type, setType] = useState("players");
  const [sport, setSport] = useState("allPlayers");
  const [property, setProperty] = useState("allProperties");

  useEffect(() => {
    // console.log(user);
  });
  const handlePress = async () => {
    setSearch(showPlayers ? [true, sport] : [false, property]);
    setModalVisible(false);
  };

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
          <Text style={global.modalTitle}>Search</Text>
        </View>
        <View style={{ marginLeft: 20 }}>
          <Picker
            style={{
              backgroundColor: "#eee",
              marginVertical: 40,
              width: 300,
            }}
            selectedValue={type}
            onValueChange={(itemValue) => {
              itemValue === "players"
                ? setShowPlayers(true)
                : setShowPlayers(false);
              setType(itemValue);
            }}
          >
            <Picker.Item label="Players" value="players" />
            <Picker.Item label="Fields" value="fields" />
            <Picker.Item label="Equipments" value="equipments" />
          </Picker>
          {showPlayers && (
            <Picker
              style={{
                backgroundColor: "#eee",
                width: 300,
                marginBottom: 20,
              }}
              selectedValue={sport}
              onValueChange={(itemValue) => setSport(itemValue)}
            >
              <Picker.Item label="All Players" value="allPlayers" />
              <Picker.Item label="Football" value="football" />
              <Picker.Item label="Basketball" value="basketball" />
              <Picker.Item label="Volleyball" value="volleyball" />
              <Picker.Item label="Ski" value="ski" />
              <Picker.Item label="Bike" value="bike" />
              <Picker.Item label="Surfing" value="surfing" />
            </Picker>
          )}
          {!showPlayers && (
            <Picker
              style={{
                backgroundColor: "#eee",
                width: 300,
              }}
              selectedValue={property}
              onValueChange={(itemValue) => setProperty(itemValue)}
            >
              <Picker.Item label="All Properties" value="allProperties" />
              <Picker.Item label="Football fields" value="football" />
              <Picker.Item label="Basketball fields" value="basketball" />
              <Picker.Item label="Volleyball fields" value="volleyball" />
              <Picker.Item label="Ski Rental" value="ski" />
              <Picker.Item label="Bike Rental" value="bike" />
              <Picker.Item label="Surfing Rental" value="surfing" />
            </Picker>
          )}
        </View>
        <Button style={global.saveAbout} onPress={handlePress}>
          <Text style={{ color: "white", fontSize: 16 }}>Search</Text>
        </Button>
      </View>
    </BlurView>
  );
}
