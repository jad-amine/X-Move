import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { global } from "../../styles/globalStyles";
import { Picker } from "@react-native-picker/picker";

const Play = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View>
      <View style={global.headerTab}>
        <TouchableOpacity style={{ backgroundColor: "#ddd", padding: 30 }}>
          <Text>Field Rent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: "#ddd", padding: 30 }}>
          <Text>Equipments Rent</Text>
        </TouchableOpacity>
      </View>
      <Picker
        style={{
          color: "white",
          fontSize: 30,
          borderBottomWidth: 1,
          backgroundColor: "tomato",
          margin: 40,
          padding: 30,
        }}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label="Football" value="java" />
        <Picker.Item label="Basketball" value="js" />
        <Picker.Item label="Tennis" value="js" />
      </Picker>
    </View>
  );
};

export default Play;
