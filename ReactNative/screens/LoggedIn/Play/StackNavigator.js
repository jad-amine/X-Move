import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RentField from "./RentField";
import Calendar from "../../../components/Calendar";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="RentField"
        component={RentField}
      />
      <Stack.Screen
        options={{ headerTitleAlign: "center" }}
        name="Calendar"
        component={Calendar}
      />
    </Stack.Navigator>
  );
}
