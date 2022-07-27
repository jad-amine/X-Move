import { View, Text, ScrollView, Modal } from "react-native";
import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import FloatingIcon from "../../components/Feeds/FloatingIcon";
import AddPost from "../../components/Feeds/AddPost";

export default function Feeds() {
  const { user, setUser } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Text style={{ flex: 1 }}>Feeds</Text>
        {user.info.friends.length === 0 && (
          <Text>Add some friends to receive Feeds</Text>
        )}
        {user.info.friends.map((friend, i) => (
          <Text key={i}>{friend.post}</Text>
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
        <AddPost user={user} setUser={setUser} setShowModal={setShowModal} />
      </Modal>
    </View>
  );
}
