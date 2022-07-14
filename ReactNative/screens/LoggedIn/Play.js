import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { global } from "../../styles/globalStyles";
import { Picker } from "@react-native-picker/picker";
import RentEquipments from "../../components/RentEquipments";
import RentField from "../../components/RentField";

const Play = () => {
  const [field, setField] = useState(true);
  return (
    <View>
      <View style={global.headerTab}>
        <TouchableOpacity
          onPress={() => setField(true)}
          style={{ backgroundColor: "#ddd", padding: 30 }}
        >
          <Text>Field Rent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setField(false)}
          style={{ backgroundColor: "#ddd", padding: 30 }}
        >
          <Text>Equipments Rent</Text>
        </TouchableOpacity>
      </View>
      {field ? (
        <>
          <Picker
            style={{
              color: "white",
              fontSize: 30,
              borderBottomWidth: 1,
              backgroundColor: "tomato",
              margin: 40,
              padding: 30,
            }}
            selectedValue={field}
            onValueChange={(itemValue, itemIndex) => setField(itemValue)}
          >
            <Picker.Item label="Football" value="Football" />
            <Picker.Item label="Basketball" value="Basketball" />
            <Picker.Item label="Tennis" value="Tennis" />
          </Picker>
          <RentField />
        </>
      ) : (
        <RentEquipments />
      )}
    </View>
  );
};

export default Play;
