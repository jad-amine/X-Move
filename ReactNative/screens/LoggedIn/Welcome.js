// Utilities
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Pages
import React from "react";
import Main from "./Main";
import Fitness from "./Sports/Fitness";

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
    </Stack.Navigator>
  );
};

export default Welcome;
