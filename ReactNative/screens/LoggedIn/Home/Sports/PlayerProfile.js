import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { global } from "../../../../styles/globalStyles";

const PlayerProfile = ({ route }) => {
  const user = route.params;
  return (
    <>
      <View style={{ margin: 10, flexDirection: "row" }}>
        <Image
          source={{ uri: `http://10.0.2.2:4000/` + user.pictureURL }}
          style={{ height: 150, width: 150 }}
        />
        <View style={{ padding: 40, flex: 1 }}>
          <Text style={{ fontSize: 35 }}>{user.name}</Text>
          <Text style={{ color: "gray" }}>{user.email}</Text>
        </View>
      </View>
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          style={{ ...global.PlayerProfileButton, backgroundColor: "#FF4D00" }}
        >
          <Text style={{ ...global.registerText, fontSize: 18 }}>
            ADD FRIEND
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...global.PlayerProfileButton,
            backgroundColor: "#2C75E2",
          }}
        >
          <Text style={{ ...global.registerText, fontSize: 18 }}>CHAT</Text>
        </TouchableOpacity>
      </View>
      <Text style={global.about}>About</Text>
    </>
  );
};

export default PlayerProfile;
