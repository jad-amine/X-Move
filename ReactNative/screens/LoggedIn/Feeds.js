import { View, Text, ScrollView, Modal } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import FloatingIcon from "../../components/Feeds/FloatingIcon";
import AddPost from "../../components/Feeds/AddPost";
import PostCard from "../../components/Feeds/PostCard";

export default function Feeds() {
  const { user, setUser } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
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
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Text style={{ flex: 1 }}>Feeds</Text>
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
