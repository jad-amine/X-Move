// Utilities
import React from "react";
import { View } from "react-native";
import { Avatar, Card } from "react-native-paper";
import { global } from "../styles/globalStyles";

export default function Reservation({ item }) {
  const RighContent = (props) => (
    <Avatar.Text size={40} label={item.player} backgroundColor="tomato" />
  );

  return (
    <View style={global.reservationCard}>
      <Card>
        <Card.Title
          title={
            item.start.split("T")[1].slice(0, 5) +
            "   " +
            item.end.split("T")[1].slice(0, 5)
          }
          subtitle="Friendly Game"
          right={RighContent}
          style={global.cardTitle}
        />
      </Card>
    </View>
  );
}
