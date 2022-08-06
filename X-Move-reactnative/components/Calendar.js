// Utilities
import React from "react";
import { Agenda } from "react-native-calendars";
import { useRoute } from "@react-navigation/native";

// Component
import Reservation from "./Reservation";

export default function Calendar() {
  const item = useRoute().params;

  // Organize reservations by date and time
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
      // Max amount of months allowed to scroll to the past.
      pastScrollRange={1}
      // Max amount of months allowed to scroll to the future.
      futureScrollRange={4}
      theme={{
        agendaTodayColor: "#ff4d00",
      }}
      renderItem={(item, firstItemInDay) => {
        return <Reservation item={item} />;
      }}
    />
  );
}
