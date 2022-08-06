// Utilities
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Home from "./Home";
import Ball from "./Sports/Ball";
import Water from "./Sports/Water";
import Winter from "./Sports/Winter";
import Cycling from "./Sports/Cycling";
import Fitness from "./Sports/Fitness";
import Players from "./Sports/Players";
import Entertainments from "./Sports/Entertainments";
import PlayerProfile from "./Sports/PlayerProfile";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="Fitness" component={Fitness} />
      <Stack.Screen name="Cycling" component={Cycling} />
      <Stack.Screen
        options={{ headerTitle: "Water Sports" }}
        name="Water"
        component={Water}
      />
      <Stack.Screen
        options={{ headerTitle: "Winter Sports" }}
        name="Winter"
        component={Winter}
      />
      <Stack.Screen
        options={{ headerTitle: "Ball Sports" }}
        name="Ball"
        component={Ball}
      />
      <Stack.Screen
        options={{ headerTitle: "Entertainment" }}
        name="Entertainment"
        component={Entertainments}
      />
      <Stack.Screen
        options={{ headerTitle: "Players" }}
        name="Players"
        component={Players}
      />
      <Stack.Screen
        options={{ headerTitle: "Player Profile" }}
        name="PlayerProfile"
        component={PlayerProfile}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
