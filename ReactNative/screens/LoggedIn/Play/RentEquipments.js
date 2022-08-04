import { View, Text, FlatList, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { UserContext } from "../../../contexts/UserContext";
import FieldComponent from "../../../components/FieldComponent";
import API from "../../../api";

const RentField = () => {
  const [sport, setSport] = useState("ski");
  const [fields, setFields] = useState({});
  const { user } = useContext(UserContext);

  const getFields = async () => {
    try {
      const { data } = await API.get("getReservations/" + sport, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
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
          <Picker.Item style={{ fontSize: 20 }} label="Bike" value="bike" />
          <Picker.Item style={{ fontSize: 20 }} label="Ski" value="ski" />
          <Picker.Item
            style={{ fontSize: 20 }}
            label="Scuba Diving"
            value="scubadiving"
          />
          <Picker.Item
            style={{ fontSize: 20 }}
            label="Kitesurf"
            value="kitesurf"
          />
          <Picker.Item style={{ fontSize: 20 }} label="Sail" value="sail" />
          <Picker.Item style={{ fontSize: 20 }} label="Kayak" value="kayak" />
          <Picker.Item style={{ fontSize: 20 }} label="Ski-Do" value="skido" />
        </Picker>
      )}
    />
  );
};

export default RentField;
