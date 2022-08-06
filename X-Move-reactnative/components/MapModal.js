// Utilities
import { BlurView } from "expo-blur";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { global } from "../styles/globalStyles";
import { Picker } from "@react-native-picker/picker";
import { View, Text, StyleSheet } from "react-native";

export default function MapModal({ setModalVisible, setSearch }) {
  const [type, setType] = useState("players");
  const [sport, setSport] = useState("allPlayers");
  const [showPlayers, setShowPlayers] = useState(true);
  const [property, setProperty] = useState("allProperties");

  const handlePress = async () => {
    setSearch(showPlayers ? [true, sport] : [false, property]);
    setModalVisible(false);
  };

  return (
    <BlurView intensity={110} tint="dark" style={styles.blur}>
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
        <View style={styles.pickerView}>
          <Picker
            style={styles.upperPicker}
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
              style={styles.picker}
              selectedValue={sport}
              onValueChange={(itemValue) => setSport(itemValue)}
            >
              <Picker.Item label="All Players" value="allPlayers" />
              <Picker.Item label="Football" value="Football" />
              <Picker.Item label="Basketball" value="Basketball" />
              <Picker.Item label="Volleyball" value="Volleyball" />
              <Picker.Item label="Ski" value="Ski" />
              <Picker.Item label="Bike" value="Bike" />
              <Picker.Item label="Surf" value="Surf" />
              <Picker.Item label="Gym" value="Gym" />
            </Picker>
          )}
          {!showPlayers && (
            <Picker
              style={styles.playerPicker}
              selectedValue={property}
              onValueChange={(itemValue) => setProperty(itemValue)}
            >
              <Picker.Item label="All Properties" value="allProperties" />
              <Picker.Item label="Football fields" value="Football" />
              <Picker.Item label="Basketball fields" value="Basketball" />
              <Picker.Item label="Volleyball fields" value="Volleyball" />
              <Picker.Item label="Ski Rental" value="Ski" />
              <Picker.Item label="Bike Rental" value="Bike" />
              <Picker.Item label="Surfing Rental" value="Surfing" />
            </Picker>
          )}
        </View>
        <Button style={global.saveAbout} onPress={handlePress}>
          <Text style={styles.searchBttn}>Search</Text>
        </Button>
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  blur: {
    height: "100%",
  },

  pickerView: {
    marginLeft: 20,
  },

  upperPicker: {
    backgroundColor: "#eee",
    marginVertical: 40,
    width: 300,
  },

  picker: {
    backgroundColor: "#eee",
    width: 300,
    marginBottom: 20,
  },

  playerPicker: {
    backgroundColor: "#eee",
    width: 300,
  },

  searchBttn: {
    color: "white",
    fontSize: 16,
  },
});
