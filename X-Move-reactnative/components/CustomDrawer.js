import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { UserContext } from "../contexts/UserContext";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";

export default function CustomDrawer(props) {
  const { user, setUser } = useContext(UserContext);
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
            source={{ uri: `http://192.168.1.3:4000/` + user.info.pictureURL }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                color: "white",
                fontSize: 18,
                // fontFamily: "Roboto-Medium",
                marginBottom: 5,
              }}
            >
              {user.info.name}{" "}
              <Ionicons name="logo-capacitor" size={24} color="white" />
            </Text>
            <Text
              style={{
                color: "white",
                // fontFamily: "Roboto-Regular",
                marginBottom: 5,
              }}
            >
              {user.info.email}
            </Text>
          </View>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign name="sharealt" size={26} color="#666" />
            <Text style={{ fontSize: 15, marginLeft: 20 }}>Tell a Friend</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            SecureStore.setItemAsync("token", "");
            setUser(null);
          }}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="logout" size={26} color="red" />
            <Text style={{ fontSize: 15, marginLeft: 15 }}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
