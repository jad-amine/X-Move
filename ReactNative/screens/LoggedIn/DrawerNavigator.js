import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import { Image } from "react-native";
import FavoriteSports from "./FavoriteSports";
import logo from "../../assets/logo.png";

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
