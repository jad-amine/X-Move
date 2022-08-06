// Utilities
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { global } from "../../styles/globalStyles";
import { View, Text, ScrollView } from "react-native";

// Component
import FriendCard from "./FriendCard";

export default function FriendsModal({ user, setFriendsModalVisible }) {
  return (
    <ScrollView style={global.friendModal}>
      <View style={global.modalHead}>
        <AntDesign
          name="close"
          size={30}
          color="black"
          onPress={() => setFriendsModalVisible(false)}
        />
      </View>
      {user.info.pendingFriendRequests.length !== 0 && (
        <Text style={[global.friendModalHeaders]}>Friend Requests</Text>
      )}
      {user.info.pendingFriendRequests.map((friend, index) => (
        <FriendCard key={index} friend={friend} />
      ))}
      <Text style={[global.friendModalHeaders]}>Friends</Text>
      {user.info.friends.map((friend, index) => (
        <FriendCard key={index} friend={friend} />
      ))}
    </ScrollView>
  );
}
