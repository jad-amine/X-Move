import { View, Text } from "react-native";
import React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

export default function Reservation({ item }) {
  const RighContent = (props) => (
    <Avatar.Text size={40} label={item.player} backgroundColor="tomato" />
  );
  return (
    <View style={{ marginTop: 40, marginRight: 20 }}>
      <Card>
        <Card.Title
          title={
            item.start.split("T")[1].slice(0, 5) +
            "   " +
            item.end.split("T")[1].slice(0, 5)
          }
          subtitle="Friendly Game"
          right={RighContent}
          style={{ paddingRight: 20 }}
        />
        {/* <Card.Content>
          <Title>
            {item.start.split("T")[1].slice(0, 5)}
            {"  "}
            {item.end.split("T")[1].slice(0, 5)}
          </Title>
          <Paragraph></Paragraph>
        </Card.Content> */}
      </Card>
    </View>
  );
}
