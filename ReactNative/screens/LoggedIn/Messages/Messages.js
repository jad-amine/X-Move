import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "./Chat";
import Conversations from "./Conversations";

const Stack = createNativeStackNavigator();

const Messages = ({ route }) => {
  return (
    <Stack.Navigator initialRouteName="Conversations">
      <Stack.Screen name="Conversations" component={Conversations} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

export default Messages;
