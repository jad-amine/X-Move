import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { Picker } from "@react-native-picker/picker";

const RentField = () => {
  const [field, setField] = useState("football");
  const { user } = useContext(UserContext);

  const getFields = async () => {
    try {
      const response = await fetch(
        "http://10.0.2.2:4000/api/users/getReservations/" + field,
        {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getFields();
  }, []);

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
        onValueChange={(itemValue) => setField(itemValue)}
      >
        <Picker.Item label="Football" value="football" />
        <Picker.Item label="Basketball" value="basketball" />
        <Picker.Item label="Tennis" value="tennis" />
      </Picker>
    </View>
  );
};

export default RentField;
