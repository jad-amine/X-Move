// import { createDrawerNavigator } from "@react-navigation/drawer";
// const Drawer = createDrawerNavigator();

// Utilities
import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import Welcome from "./Welcome";
import Messages from "./Messages";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#FF4D00" },
        tabBarStyle: { position: "absolute" },
        tabBarActiveBackgroundColor: "#eee",
        tabBarShowLabel: false,
        headerTitle: "X-move",
        tabBarActiveTintColor: "#FF4D00",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === "Welcome") {
            iconName = "home";
          } else if (route.name === "Messages") {
            iconName = "chat";
          } else if (route.name === "Profile") {
            iconName = "user";
            return <AntDesign name={iconName} size={30} color={color} />;
          }
          return <Entypo name={iconName} size={30} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Welcome" component={Welcome} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Home;
