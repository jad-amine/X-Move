import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function ChatHeader({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Chat", {
          email: item.userB.email,
          name: item.userB.displayName,
        })
      }
      style={{
        margin: 30,
        backgroundColor: "#eee",
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        paddingBottom: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>
          {item.userB.displayName && item.userB.displayName}
        </Text>
        <Text style={{ color: "gray", fontSize: 18, marginTop: 5 }}>
          {item.lastMessage.text && item.lastMessage.text}
        </Text>
      </View>
      <Text style={{ color: "gray" }}>
        {item.lastMessage.createdAt.toDate().toDateString()}
      </Text>
    </TouchableOpacity>
  );
}
