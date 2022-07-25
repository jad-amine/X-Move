import { View, Text, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { global } from "../../styles/globalStyles";
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
        {/* <Text style={global.modalTitle}>Friends </Text> */}
      </View>
      {user.info.pendingFriendRequests.lenght && (
        <Text style={[global.friendModalHeaders, { marginTop: 50 }]}>
          Friend Requests
        </Text>
      )}
      {user.info.pendingFriendRequests.map((friend, index) => (
        <FriendCard key={index} friend={friend} />
      ))}
      <Text style={[global.friendModalHeaders, { marginTop: 50 }]}>
        Friends
      </Text>
      {user.info.friends.map((friend, index) => (
        <FriendCard key={index} friend={friend} />
      ))}
      {/* <Text style={[global.friendModalHeaders, { marginTop: 50 }]}>
        Friends
      </Text> */}
      {/* {user.info.friendRequests.map((friend, index) => (
        <FriendCard key={index} friend={friend} title={}/>
      ))} */}
      {/* <Button style={global.saveAbout} onPress={handlePress}>
        <Text style={{ color: "white", fontSize: 16 }}>Save</Text>
      </Button> */}
    </ScrollView>
  );
}
