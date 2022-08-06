// Utilities
import { db } from "../../../firebase";
import { UserContext } from "../../../contexts/UserContext";
import React, { useContext, useEffect, useState } from "react";
import { MessagesContext } from "../../../contexts/MessagesContext";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Chat from "./Chat";
import Friends from "./Friends";
import Conversations from "./Conversations";
import { Alert } from "react-native";

const Stack = createNativeStackNavigator();

const Messages = () => {
  const [rooms, setRooms] = useState(null);
  const { user } = useContext(UserContext);

  // Firebase firestore query
  const chatsQuery = query(
    collection(db, "rooms"),
    where("participantsArray", "array-contains", user.info.email)
  );

  useEffect(() => {
    // Fetch previous chats
    const getPreviousChats = async () => {
      try {
        // Subscribe to firestore collection live changes
        const unsubscribe = onSnapshot(chatsQuery, (querySnapshot) => {
          const parsedChats = querySnapshot.docs
            .filter((doc) => doc.data().lastMessage)
            .map((doc) => ({
              ...doc.data(),
              id: doc.id,
              userB: doc
                .data()
                .participants.find((p) => p.email !== user.info.email),
            }));
          setRooms(parsedChats);
        });
        return () => unsubscribe();
      } catch (error) {
        Alert.alert("Network error !");
      }
    };
    getPreviousChats();
  }, []);

  return (
    <MessagesContext.Provider value={{ rooms, setRooms }}>
      <Stack.Navigator
        screenOptions={{ headerTitleAlign: "center" }}
        initialRouteName="Conversations"
      >
        <Stack.Screen name="Conversations" component={Conversations} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Friends" component={Friends} />
      </Stack.Navigator>
    </MessagesContext.Provider>
  );
};

export default Messages;
