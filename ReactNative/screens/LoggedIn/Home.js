// import { createDrawerNavigator } from "@react-navigation/drawer";
// const Drawer = createDrawerNavigator();
import React from "react";
import Welcome from "./Welcome";
import Notifications from "./Notifications";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Welcome" component={Welcome} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Home;
