// import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import { Text } from "react-native";
import FavoriteSports from "./FavoriteSports";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    // <Text>Drawer</Text>
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerType: "back",
        headerTitle: "X-Move",
        headerTitleAlign: "center",
        headerRight: () => <Text>Settings</Text>,
        headerStyle: { height: 70, backgroundColor: "#FF4D00" },
        headerTintColor: "white",
        headerTitleStyle: { fontSize: 30 },
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Favorite Sports" component={FavoriteSports} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
