import React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

export default function FieldComponent({ item }) {
  return (
    <Card onPress={() => console.log("card")}>
      <Card.Cover
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTItVo-m1lrra5Ax4G0wh3HdDe0gfcyBDqhwQ&usqp=CAU",
        }}
      />
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        // left={LeftContent} add avatar
      />
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => console.log("cancel")}>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
}
