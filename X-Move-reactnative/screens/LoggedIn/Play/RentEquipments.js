// Utilities
import API from "../../../api";
import { Picker } from "@react-native-picker/picker";
import { Alert, FlatList, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";

// Components
import FieldComponent from "../../../components/FieldComponent";

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
      Alert.alert("Network Error !");
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
          style={styles.headerPicker}
          selectedValue={sport}
          onValueChange={(itemValue) => setSport(itemValue)}
        >
          <Picker.Item style={styles.pickerItem} label="Bike" value="bike" />
          <Picker.Item style={styles.pickerItem} label="Ski" value="ski" />
          <Picker.Item
            style={styles.pickerItem}
            label="Scuba Diving"
            value="scubadiving"
          />
          <Picker.Item
            style={styles.pickerItem}
            label="Kitesurf"
            value="kitesurf"
          />
          <Picker.Item style={styles.pickerItem} label="Sail" value="sail" />
          <Picker.Item style={styles.pickerItem} label="Kayak" value="kayak" />
          <Picker.Item style={styles.pickerItem} label="Ski-Do" value="skido" />
        </Picker>
      )}
    />
  );
};

export default RentField;

const styles = StyleSheet.create({
  headerPicker: {
    color: "white",
    backgroundColor: "tomato",
    margin: 40,
    padding: 30,
  },
  pickerItem: {
    fontSize: 20,
  },
});
