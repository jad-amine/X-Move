import React from "react";
import { Image } from "react-native";
import logo from "../../assets/logo.png";
import { createDrawerNavigator } from "@react-navigation/drawer";

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
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="BottomTab" component={BottomTab} />
      <Drawer.Screen name="Favorite Sports" component={FavoriteSports} />
      <Drawer.Screen name="Feeds" component={Feeds} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
