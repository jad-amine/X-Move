// Utilities
import React from "react";
import StackNavigator from "./StackNavigator";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import Map from "../Map";
import Play from "../Play/Play";
import Profile from "../Profile";
import Messages from "../Messages/Messages";

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
      <Tab.Screen name="Map" component={Map} options={{ headerShown: false }} />
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
