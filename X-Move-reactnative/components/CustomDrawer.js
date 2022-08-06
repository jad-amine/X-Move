// Utilities
import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { global } from "../styles/globalStyles";
import * as SecureStore from "expo-secure-store";
import { MaterialIcons } from "@expo/vector-icons";
import { UserContext } from "../contexts/UserContext";
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

export default function CustomDrawer(props) {
  const { user, setUser } = useContext(UserContext);

  return (
    <View style={global.drawerContainer}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#FF4D00" }}
      >
        <ImageBackground
          source={require(`../assets/Drawer.jpg`)}
          style={global.drawerBackgroundImage}
        >
          <Image
            style={global.drawerImg}
            source={{ uri: `http://192.168.1.3:4000/` + user.info.pictureURL }}
          />
          <View style={global.drawerLogo}>
            <Text style={global.drawerText}>
              {user.info.name}{" "}
              <Ionicons name="logo-capacitor" size={24} color="white" />
            </Text>
            <Text style={global.drawerEmail}>{user.info.email}</Text>
          </View>
        </ImageBackground>
        <View style={global.drawerView}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={global.drawerBottom}>
        <TouchableOpacity onPress={() => {}} style={global.shareBttn}>
          <View style={global.share}>
            <AntDesign name="sharealt" size={26} color="#666" />
            <Text style={global.shareText}>Tell a Friend</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            SecureStore.setItemAsync("token", "");
            setUser(null);
          }}
          style={global.signOutView}
        >
          <View style={global.signOutBttn}>
            <MaterialIcons name="logout" size={26} color="red" />
            <Text style={global.signOutText}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
