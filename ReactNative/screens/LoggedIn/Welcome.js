// Utilities
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Pages
import React from "react";
import Main from "./Main";
import Ball from "./Sports/Ball";
import Cycling from "./Sports/Cycling";
import Entertainments from "./Sports/Entertainments";
import Fitness from "./Sports/Fitness";
import SportUsers from "./Sports/SportUsers";
import Water from "./Sports/Water";
import Winter from "./Sports/Winter";

const Stack = createNativeStackNavigator();

const Welcome = () => {
  return (
    <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Main"
        component={Main}
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
        name="SportUsers"
        component={SportUsers}
      />
    </Stack.Navigator>
  );
};

export default Welcome;
