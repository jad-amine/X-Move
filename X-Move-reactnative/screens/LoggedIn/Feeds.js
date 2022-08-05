// Utilities
import API from "../../api";
import { global } from "../../styles/globalStyles";
import { UserContext } from "../../contexts/UserContext";
import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Modal,
  RefreshControl,
  Keyboard,
} from "react-native";

// Components
import AddPost from "../../components/Feeds/AddPost";
import PostCard from "../../components/Feeds/PostCard";
import FloatingIcon from "../../components/Feeds/FloatingIcon";

export default function Feeds() {
  const { user, setUser } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Hide add post Floating icon when adding comments
    Keyboard.addListener("keyboardDidShow", () => setShowIcon(false));
    Keyboard.addListener("keyboardDidHide", () => setShowIcon(true));

    // Merge all posts to display in one array
    let friendsPosts = [];
    if (user.info?.friends.length !== 0) {
      user.info.friends.forEach((friend) => {
        friendsPosts = [...friendsPosts, ...friend?.posts];
      });
    }
    const unorderedPosts = [...user.info?.posts, ...friendsPosts];
    unorderedPosts.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    setPosts(unorderedPosts);
  }, [user]);

  // Fetch new friends posts on screen pull down
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    const authUser = async () => {
      try {
        const { data } = await API.post(
          "getUserData",
          { mission: "Auth User" },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        if (data.status == "Verified") {
          setTimeout(() => {
            setRefreshing(false);
          }, 1000);
          setUser({ info: data.user, token: user.token });
        }
      } catch (err) {
        return;
      }
    };
    authUser();
  }, []);

  return (
    <View style={global.feeds}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {posts?.length === 0 && <Text style={global.noFeeds}>No Feeds.</Text>}
        {posts.map((post, index) => (
          <PostCard key={index} post={post} setPosts={setPosts} />
        ))}
      </ScrollView>
      {showIcon && <FloatingIcon setShowModal={setShowModal} />}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(!false);
        }}
      >
        <AddPost
          user={user}
          setUser={setUser}
          setShowModal={setShowModal}
          posts={posts}
          setPosts={setPosts}
        />
      </Modal>
    </View>
  );
}
