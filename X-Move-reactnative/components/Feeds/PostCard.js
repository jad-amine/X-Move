// Utilities
import API from "../../api";
import * as React from "react";
import { Alert, Text, View } from "react-native";
import { formatDistance } from "date-fns";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { global } from "../../styles/globalStyles";
import { UserContext } from "../../contexts/UserContext";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const PostCard = ({ post }) => {
  const { user } = React.useContext(UserContext);
  const [addComment, setAddComment] = React.useState(false);
  const [comments, setComments] = React.useState([...post.comments]);
  const [comment, setComment] = React.useState("");
  const [isLiked, setIsLiked] = React.useState(
    post.likes.includes(user.info._id)
  );

  // Post headers
  const LeftContent = (props) =>
    post.picture ? (
      <Avatar.Image
        style={global.postPlayerPic}
        size={55}
        source={{ uri: `http://192.168.1.3:4000/` + post.playerPic }}
      />
    ) : (
      <Avatar.Icon
        size={55}
        icon="account"
        color="white"
        style={global.avatarIcon}
      />
    );

  // Like/Unlike post
  const handlePress = async () => {
    try {
      const mission = isLiked ? "unlike" : "like";
      const { data } = await API.get(`likePost/${mission}/${post._id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      data === "Success" ? setIsLiked(!isLiked) : alert("Operation Failed");
    } catch (error) {
      Alert.alert("Network Error !");
    }
  };

  // Add comment
  const sendMessage = async () => {
    try {
      const newComment = {
        comment,
        name: user.info.name,
        date: new Date(),
      };
      if (comment === "") return;
      const { data } = await API.post(
        `addComment/${post._id}`,
        { ...newComment },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      if (data === "Added") {
        setComments([...comments, newComment]);
        setAddComment(false);
        setComment("");
      }
    } catch (error) {
      Alert.alert("Network Error !s");
    }
  };

  return (
    <Card style={global.postStyle}>
      <Card.Title title={post.name} left={LeftContent} />
      <Card.Cover
        source={{ uri: `http://192.168.1.3:4000/` + post.picture }}
        style={global.postCover}
      />
      <Card.Actions style={global.postActions}>
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
        {comments.length != 0 &&
          comments.map((comment) => (
            <Paragraph>
              <Text>
                <Text style={global.postParagraph}>{comment.name}: </Text>
                {comment.comment}
              </Text>
            </Paragraph>
          ))}

        {addComment && (
          <View style={global.postComment}>
            <TextInput
              style={global.commentInput}
              label="Add comment.."
              value={comment}
              onChangeText={setComment}
              activeUnderlineColor="gray"
            />
            <Button style={global.addComment} onPress={sendMessage}>
              <Feather name="send" size={30} color="black" />
            </Button>
          </View>
        )}
        <Paragraph>
          {formatDistance(new Date(post.createdAt), new Date(), {
            addSuffix: true,
          })}
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

export default PostCard;
