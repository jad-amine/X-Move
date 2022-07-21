// Utilities
import React, { useContext, useEffect, useState } from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import Map from "../Map";
import Profile from "../Profile";
import Messages from "../Messages/Messages";
import StackNavigator from "./StackNavigator";
import Play from "../Play/Play";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "Chat") {
      return "none";
    }
    return "flex";
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
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
          if (route.name === "StackNavigator") {
            iconName = "home";
          } else if (route.name === "Messages") {
            iconName = "chat";
          } else if (route.name === "Map") {
            iconName = "location-pin";
          } else if (route.name === "Profile") {
            iconName = "user";
            return <AntDesign name={iconName} size={30} color={color} />;
          } else if (route.name === "Play") {
            iconName = "play";
            return <AntDesign name={iconName} size={43} color={"#FF4D00"} />;
          }
          return <Entypo name={iconName} size={30} color={color} />;
        },
      })}
    >
      <Tab.Screen
        options={{ title: "Home" }}
        name="StackNavigator"
        component={StackNavigator}
      />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Play" component={Play} />
      <Tab.Screen
        options={({ route }) => ({
          tabBarStyle: { display: getTabBarVisibility(route) },
        })}
        name="Messages"
        component={Messages}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTab;
