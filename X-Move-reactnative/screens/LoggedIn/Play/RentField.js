// Utilities
import API from "../../../api";
import { Alert, FlatList, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";

// Components
import FieldComponent from "../../../components/FieldComponent";

const RentField = () => {
  const { user } = useContext(UserContext);
  const [fields, setFields] = useState({});
  const [sport, setSport] = useState("football");

  const getFields = async () => {
    try {
      const { data } = await API.get(`getReservations/${sport}`, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      });
      setFields(data);
    } catch (error) {
      Alert.alert("Network Error !");
    }
  };

  // Fetch fields data on component load
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
          <Picker.Item
            style={styles.pickerItem}
            label="Football"
            value="football"
          />
          <Picker.Item
            style={styles.pickerItem}
            label="Basketball"
            value="basketball"
          />
          <Picker.Item
            style={styles.pickerItem}
            label="Tennis"
            value="tennis"
          />
          <Picker.Item
            style={styles.pickerItem}
            label="Volleyball"
            value="volleyball"
          />
          <Picker.Item style={styles.pickerItem} label="Rugby" value="rugby" />
          <Picker.Item
            style={styles.pickerItem}
            label="Bowling"
            value="bowling"
          />
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
