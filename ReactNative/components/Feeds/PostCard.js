import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import { formatDistance } from "date-fns";

const PostCard = ({ post }) => {
  const [addComment, setAddComment] = React.useState(false);
  const [comment, setComment] = React.useState("");
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
    <Card style={{ marginVertical: 15, paddingVertical: 5 }}>
      <Card.Title title={post.name} left={LeftContent} />
      <Card.Cover source={{ uri: `http://10.0.2.2:4000/` + post.picture }} />
      <Card.Actions style={{ marginBottom: -15 }}>
        <Button>
          <AntDesign name="hearto" size={24} color="black" />
        </Button>
        <Button onPress={() => setAddComment(!addComment)}>
          <Feather name="message-circle" size={26} color="#333" />
        </Button>
        <Button>
          <Feather name="bookmark" size={24} color="black" />
        </Button>
      </Card.Actions>
      <Card.Content>
        <Title>{post.caption}</Title>
        <Paragraph>
          {formatDistance(new Date(post.createdAt), new Date())}
        </Paragraph>
        {addComment && (
          <TextInput
            style={{ margin: 5, height: 45 }}
            label="Add comment.."
            value={comment}
            onChangeText={setComment}
          />
        )}
      </Card.Content>
    </Card>
  );
};

export default PostCard;
