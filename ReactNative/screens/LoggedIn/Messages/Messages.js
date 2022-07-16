import React, { useContext, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "./Chat";
import Conversations from "./Conversations";
// import { MessagesContext } from "../../../contexts/MessagesContext";
// import { UserContext } from "../../../contexts/UserContext";

const Stack = createNativeStackNavigator();

const Messages = ({ route }) => {
  // const [allMessages, setAllMessages] = useState(null);
  // const { user } = useContext(UserContext);

  return (
    // <MessagesContext.Provider
    //   value={{ allMessages, setAllMessages, db, colRef }}
    // >
    <Stack.Navigator initialRouteName="Conversations">
      <Stack.Screen name="Conversations" component={Conversations} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
    // </MessagesContext.Provider>
  );
};

export default Messages;
