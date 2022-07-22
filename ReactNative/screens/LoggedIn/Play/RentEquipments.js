import { View, Text, FlatList, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { UserContext } from "../../../contexts/UserContext";
import FieldComponent from "../../../components/FieldComponent";

const RentField = () => {
  const [sport, setSport] = useState("ski");
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
    <FlatList
      data={fields}
      renderItem={({ item, index }) => <FieldComponent item={item} />}
      keyExtractor={(i, index) => index}
      ListHeaderComponent={() => (
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
          <Picker.Item label="Ski" value="ski" />
          <Picker.Item label="Scuba Diving" value="scubadiving" />
          <Picker.Item label="Bike" value="bike" />
        </Picker>
      )}
    />
  );
};

export default RentField;
