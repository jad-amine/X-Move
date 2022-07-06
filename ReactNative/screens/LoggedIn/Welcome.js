// Utilities
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Pages
import React from "react";
import Main from "./Main";
import Sport from "./Sport";

const Stack = createNativeStackNavigator();

const Welcome = () => {
  return (
    <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Main"
        component={Main}
      />
      <Stack.Screen name="Sport" component={Sport} />
    </Stack.Navigator>
  );
};

export default Welcome;
