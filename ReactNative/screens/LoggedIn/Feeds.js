import { View, Text, ScrollView, Modal, RefreshControl } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import FloatingIcon from "../../components/Feeds/FloatingIcon";
import AddPost from "../../components/Feeds/AddPost";
import PostCard from "../../components/Feeds/PostCard";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function Feeds() {
  const { user, setUser } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let friendsPosts = [];
    if (user.info.friends.length !== 0) {
      user.info.friends.forEach((friend) => {
        friendsPosts = [...friendsPosts, ...friend.posts];
      });
      console.log([...user.info.posts]);
    }
    setPosts([...user.info.posts, ...friendsPosts]);
  }, [user]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    const authUser = async () => {
      try {
        const response = await fetch(
          "http://10.0.2.2:4000/api/users/getUserData",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${user.token}`,
            },
            body: JSON.stringify({ mission: "Auth User" }),
          }
        );
        const json = await response.json();
        if (json.status == "Verified") {
          setTimeout(() => {
            setRefreshing(false);
          }, 1000);
          setUser({ info: json.user, token: user.token });
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
        {posts.length === 0 && <Text>Add some friends to receive Feeds</Text>}
        {posts.map((post, index) => (
          <PostCard key={index} post={post} setPosts={setPosts} />
        ))}
      </ScrollView>
      <FloatingIcon setShowModal={setShowModal} />
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
