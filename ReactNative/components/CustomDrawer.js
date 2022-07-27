import React, { useContext } from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { UserContext } from "../contexts/UserContext";

export default function CustomDrawer(props) {
  const { user } = useContext(UserContext);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#FF4D00" }}
      >
        <ImageBackground
          source={require(`../assets/Drawer.jpg`)}
          style={{ padding: 20 }}
        >
          <Image
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
            source={{ uri: `http://10.0.2.2:4000/` + user.info.pictureURL }}
          />
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontFamily: "Roboto-Medium",
              marginBottom: 5,
            }}
          >
            {user.info.name}
          </Text>
          <Text
            style={{
              color: "white",
              fontFamily: "Roboto-Regular",
            }}
          >
            {user.info.email}
          </Text>
        </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
        <Text>Our Custom Text</Text>
      </View>
    </View>
  );
}
