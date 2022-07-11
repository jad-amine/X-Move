// Utilities
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Pages
import Home from "./Home";
import Ball from "./Sports/Ball";
import Cycling from "./Sports/Cycling";
import Entertainments from "./Sports/Entertainments";
import Fitness from "./Sports/Fitness";
import Players from "./Sports/Players";
import Water from "./Sports/Water";
import Winter from "./Sports/Winter";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{ headerTitleAlign: "center" }}
        name="Fitness"
        component={Fitness}
      />
      <Stack.Screen
        options={{ headerTitleAlign: "center" }}
        name="Cycling"
        component={Cycling}
      />
      <Stack.Screen
        options={{ headerTitle: "Water Sports", headerTitleAlign: "center" }}
        name="Water"
        component={Water}
      />
      <Stack.Screen
        options={{ headerTitle: "Winter Sports", headerTitleAlign: "center" }}
        name="Winter"
        component={Winter}
      />
      <Stack.Screen
        options={{ headerTitle: "Ball Sports", headerTitleAlign: "center" }}
        name="Ball"
        component={Ball}
      />
      <Stack.Screen
        options={{ headerTitle: "Entertainment", headerTitleAlign: "center" }}
        name="Entertainment"
        component={Entertainments}
      />
      <Stack.Screen
        options={{ headerTitle: "Players", headerTitleAlign: "center" }}
        name="Players"
        component={Players}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
