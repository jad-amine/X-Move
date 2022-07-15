import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "./Chat";

const Stack = createNativeStackNavigator();

const Messages = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

export default Messages;
