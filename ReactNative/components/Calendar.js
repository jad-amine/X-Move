import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { Agenda } from "react-native-calendars";

export default function Calendar({ events }) {
  const item = useRoute().params;
  const time = item.reservations[0].start;
  const event = { time: [{ name: "jad" }] };
  console.log(item);
  return (
    <Agenda
      items={
        event
        //   {
        //   "2022-07-22": [{ name: "First" }, { name: "First" }, { name: "First" }],
        //   "2022-07-23": [{ name: "First" }],
        //   "2022-07-24": [{ name: "First" }],
        //   "2022-07-25": [{ name: "First" }],
        //   "2022-07-26": [{ name: "First" }],
        // }
      }
      pastScrollRange={1}
      // Max amount of months allowed to scroll to the future. Default = 50
      futureScrollRange={4}
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
