import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import { formatDistance } from "date-fns";
import { UserContext } from "../../contexts/UserContext";

const PostCard = ({ post }) => {
  const { user } = React.useContext(UserContext);
  const [addComment, setAddComment] = React.useState(false);
  const [comment, setComment] = React.useState("");
  const [isLiked, setIsLiked] = React.useState(
    post.likes.includes(user.info._id)
  );
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

  const handlePress = async () => {
    try {
      const mission = isLiked ? "unlike" : "like";
      const response = await fetch(
        `http://10.0.2.2:4000/api/users/likePost/${mission}/${post._id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const data = await response.json();
      data === "Success" ? setIsLiked(!isLiked) : alert("Operation Failed");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card style={{ marginVertical: 15, paddingVertical: 5 }}>
      <Card.Title title={post.name} left={LeftContent} />
      <Card.Cover source={{ uri: `http://10.0.2.2:4000/` + post.picture }} />
      <Card.Actions style={{ marginBottom: -15 }}>
        <Button onPress={handlePress}>
          <AntDesign
            name={isLiked ? "heart" : "hearto"}
            size={24}
            color={isLiked ? "red" : "black"}
          />
        </Button>
        <Button onPress={() => setAddComment(!addComment)}>
          <Feather name="message-circle" size={26} color="#333" />
        </Button>
        <Button>
          <Feather
            name="bookmark"
            size={24}
            color="black"
            onPress={handlePress}
          />
        </Button>
      </Card.Actions>
      <Card.Content>
        <Title>{post.caption}</Title>
        <Paragraph>
          {formatDistance(new Date(post.createdAt), new Date(), {
            addSuffix: true,
          })}
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
