// Utilities
import React from "react";
import { Image } from "react-native";
import logo from "../../assets/logo.png";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

// Screens
import BottomTab from "./Home/BottomTab";
import FavoriteSports from "./FavoriteSports";
import Feeds from "./Feeds";
import CustomDrawer from "../../components/CustomDrawer";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="BottomTab"
      screenOptions={{
        drawerActiveBackgroundColor: "#FF3F00",
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "#666",
        drawerLabelStyle: {
          marginLeft: -15,
          fontSize: 15,
        },
        drawerType: "back",
        headerTitle: "X-Move",
        headerTitleAlign: "center",
        headerRight: () => (
          <Image
            source={logo}
            style={{
              width: 50,
              height: 50,
              borderRadius: 20,
              marginRight: 10,
            }}
          />
        ),
        headerBackground: () => (
          <Image
            source={require("../../assets/Drawer.jpg")}
            style={{ height: 60 }}
          />
        ),
        // headerStyle: { height: 70, backgroundColor: "#FF4D00" },
        headerTintColor: "white",
        headerTitleStyle: { fontSize: 30 },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="BottomTab"
        component={BottomTab}
        options={{
          title: "Home",
          drawerIcon: ({ color }) => (
            <AntDesign name="home" size={28} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorite Sports"
        component={FavoriteSports}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="volleyball-ball" size={28} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Feeds"
        component={Feeds}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="images" size={28} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
