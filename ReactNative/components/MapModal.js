import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { BlurView } from "expo-blur";
import { global } from "../styles/globalStyles";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

export default function MapModal({ setModalVisible }) {
  const [selectedValue, setSelectedValue] = useState("");
  const [players, setPlayers] = useState(true);
  const [sport, setSport] = useState("");
  const [property, setProperty] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    // console.log(user);
  });
  const handlePress = async () => {};

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
        <Picker
          style={{
            backgroundColor: "#fff",
            width: 300,
          }}
          selectedValue={selectedValue}
          onValueChange={(itemValue) => {
            itemValue === "players" ? setPlayers(true) : setPlayers(false);
            setSelectedValue(itemValue);
            console.log(itemValue);
          }}
        >
          <Picker.Item label="Players" value="players" />
          <Picker.Item label="Fields" value="fields" />
          <Picker.Item label="Equipments" value="equipments" />
        </Picker>
        {players && (
          <Picker
            style={{
              backgroundColor: "#fff",
              width: 300,
            }}
            selectedValue={sport}
            onValueChange={(itemValue) => setSport(itemValue)}
          >
            <Picker.Item label="All Players" value="allPlayers" />
            <Picker.Item label="Football" value="football" />
            <Picker.Item label="Basketball" value="basketball" />
            <Picker.Item label="Volleyball" value="volleyball" />
            <Picker.Item label="Ski" value="ski" />
            <Picker.Item label="Bike" value="Bike" />
            <Picker.Item label="Surfing" value="surfing" />
          </Picker>
        )}
        {!players && (
          <Picker
            style={{
              backgroundColor: "#fff",
              width: 300,
            }}
            selectedValue={property}
            onValueChange={(itemValue) => setProperty(itemValue)}
          >
            <Picker.Item label="All Properties" value="allProperties" />
            <Picker.Item label="Football fields" value="football fields" />
            <Picker.Item label="Basketball fields" value="basketball fields" />
            <Picker.Item label="Volleyball fields" value="volleyball fields" />
            <Picker.Item label="Ski Rental" value="ski Rental" />
            <Picker.Item label="Bike Rental" value="Bike Rental" />
            <Picker.Item label="Surfing Rental" value="surfing Rental" />
          </Picker>
        )}
        <Button style={global.saveAbout} onPress={handlePress}>
          <Text style={{ color: "white", fontSize: 16 }}>Search</Text>
        </Button>
      </View>
    </BlurView>
  );
}
