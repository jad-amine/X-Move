// Utilities
import React from "react";
import { Text } from "react-native";
import { global } from "../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import { Button, Card, Paragraph } from "react-native-paper";

export default function FieldComponent({ item }) {
  const navigation = useNavigation();
  const RighContent = (props) => (
    <Text style={global.fieldInfo}>
      Rent: <Text style={global.fieldPrice}>{item.rentPerHour}$</Text>
    </Text>
  );

  return (
    <Card onPress={() => navigation.navigate("Calendar", item)}>
      <Card.Cover
        source={{
          uri: `http://192.168.1.3:4000/` + item.pictureURL,
        }}
      />
      <Card.Title
        title={item.name}
        right={RighContent}
        style={global.fieldTitle}
      />
      <Card.Content>
        <Paragraph>{item.number}</Paragraph>
        <Paragraph>{item.email}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button
          onPress={() => {
            // Credit cards don't work in Lebanon at the moment
          }}
        >
          Rent
        </Button>
        <Button>Chat</Button>
      </Card.Actions>
    </Card>
  );
}
