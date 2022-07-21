import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { Agenda } from "react-native-calendars";

export default function Calendar({ events }) {
  const item = useRoute();
  console.log(item);
  return (
    <Agenda
      items={{
        "2022-07-22": [{ name: "First" }, { name: "First" }, { name: "First" }],
        "2022-07-23": [{ name: "First" }],
        "2022-07-24": [{ name: "First" }],
        "2022-07-25": [{ name: "First" }],
        "2022-07-26": [{ name: "First" }],
      }}
      renderItem={(item, firstItemInDay) => {
        return (
          <View
            style={{
              marginTop: 50,
              paddingVertical: 10,
              backgroundColor: "red",
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white" }}>{item.name}</Text>
          </View>
        );
      }}
    />
  );
}
