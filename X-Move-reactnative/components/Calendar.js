import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { Agenda } from "react-native-calendars";
import Reservation from "./Reservation";

export default function Calendar() {
  const item = useRoute().params;
  let array = item.reservations;
  let length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (new Date(array[j].start) > new Date(array[j + 1].start)) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  let events = {};
  for (let i = 0; i < array.length; i++) {
    let date = array[i].start.split("T")[0];
    if (events[date]) {
      events[date].push(array[i]);
    } else {
      events[date] = [array[i]];
    }
  }

  return (
    <Agenda
      items={events}
      pastScrollRange={1}
      // Max amount of months allowed to scroll to the future.
      theme={{
        agendaTodayColor: "#ff4d00",
      }}
      futureScrollRange={4}
      renderItem={(item, firstItemInDay) => {
        return <Reservation item={item} />;
      }}
    />
  );
}
