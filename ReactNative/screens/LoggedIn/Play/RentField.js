import { View, Text, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { UserContext } from "../../../contexts/UserContext";
import FieldComponent from "../../../components/FieldComponent";

const RentField = () => {
  const [sport, setSport] = useState("football");
  const [fields, setFields] = useState({});
  const { user } = useContext(UserContext);

  const getFields = async () => {
    try {
      const response = await fetch(
        "http://10.0.2.2:4000/api/users/getReservations/" + sport,
        {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        }
      );
      const data = await response.json();
      setFields(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getFields();
  }, [sport]);

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
        selectedValue={sport}
        onValueChange={(itemValue) => setSport(itemValue)}
      >
        <Picker.Item label="Football" value="football" />
        <Picker.Item label="Basketball" value="basketball" />
        <Picker.Item label="Tennis" value="tennis" />
      </Picker>
      <FlatList
        data={fields}
        renderItem={({ item, index }) => <FieldComponent item={item} />}
        keyExtractor={(i, index) => index}
      />
    </View>
  );
};

export default RentField;
