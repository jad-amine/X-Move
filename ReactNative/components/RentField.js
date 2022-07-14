import { View, Text } from "react-native";
import React from "react";

const RentField = () => {
  return (
    <View>
      <Text>RentField</Text>
    </View>
  );
};

export default RentField;

/* 
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
        selectedValue={field}
        onValueChange={(itemValue, itemIndex) => setField(itemValue)}
      >
        <Picker.Item label="Football" value="Football" />
        <Picker.Item label="Basketball" value="Basketball" />
        <Picker.Item label="Tennis" value="Tennis" />
      </Picker> */
