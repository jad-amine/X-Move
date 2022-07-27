import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const PostCard = ({ post }) => {
  const LeftContent = (props) =>
    post.picture ? (
      <Avatar.Image
        style={{ marginLeft: -10 }}
        size={55}
        source={{ uri: `http://10.0.2.2:4000/` + post.playerPic }}
      />
    ) : (
      <Avatar.Icon
        size={55}
        icon="account"
        color="white"
        style={{ backgroundColor: "#ccc", marginLeft: -10 }}
      />
    );
  return (
    <Card>
      <Card.Title
        title={post.name}
        subtitle="Card Subtitle"
        left={LeftContent}
      />
      <Card.Cover source={{ uri: `http://10.0.2.2:4000/` + post.picture }} />
      <Card.Content>
        <Title>{post.caption}</Title>
        <Paragraph>{post.createdAt.toString()}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
};

export default PostCard;
