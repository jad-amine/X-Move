import {
  View,
  Text,
  ScrollView,
  Modal,
  RefreshControl,
  Keyboard,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import FloatingIcon from "../../components/Feeds/FloatingIcon";
import AddPost from "../../components/Feeds/AddPost";
import PostCard from "../../components/Feeds/PostCard";
import API from "../../api";

export default function Feeds() {
  const { user, setUser } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => setShowIcon(false));
    Keyboard.addListener("keyboardDidHide", () => setShowIcon(true));
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
        console.log(err.message, "Fix the request");
      }
    };
    authUser();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {posts?.length === 0 && (
          <Text style={{ fontSize: 20, alignItems: "center", margin: 30 }}>
            No Feeds.
          </Text>
        )}
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
