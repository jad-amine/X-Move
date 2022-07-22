import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

export default function FieldComponent({ item }) {
  console.log(item.pictureURL);
  const navigation = useNavigation();
  const RighContent = (props) => (
    <Text style={{ fontSize: 15 }}>
      Rent:{" "}
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        {item.rentPerHour}$
      </Text>
    </Text>
  );
  return (
    <Card onPress={() => navigation.navigate("Calendar", item)}>
      <Card.Cover
        source={{
          uri: `http://10.0.2.2:4000/` + item.pictureURL,
        }}
      />
      <Card.Title
        title={item.name}
        // subtitle={item.number}
        // left={LeftContent} add avatar
        right={RighContent}
        style={{ paddingRight: 30 }}
      />
      <Card.Content>
        {/* <Title>Card title</Title> */}
        <Paragraph>{item.number}</Paragraph>
        <Paragraph>{item.email}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => console.log(item)}>Rent</Button>
        <Button>Chat</Button>
      </Card.Actions>
    </Card>
  );
}
