import { View, Text } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";

const RentField = () => {
  const [field, setField] = useState(true);

  return (
    <View>
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
    </View>
  );
};

export default RentField;
