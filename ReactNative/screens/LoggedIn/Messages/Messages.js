import React, { useContext, useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "./Chat";
import Conversations from "./Conversations";
import { db } from "../../../firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { UserContext } from "../../../contexts/UserContext";
import { MessagesContext } from "../../../contexts/MessagesContext";
import Friends from "./Friends";

const Stack = createNativeStackNavigator();

const Messages = ({ route }) => {
  const [rooms, setRooms] = useState(null);

  const { user } = useContext(UserContext);
  const chatsQuery = query(
    collection(db, "rooms"),
    where("participantsArray", "array-contains", user.info.email)
  );

  useEffect(() => {
    const getPreviousChats = async () => {
      try {
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
        // return () => unsubscribe();
      } catch (error) {
        console.log(error);
      }
    };
    getPreviousChats();
  }, []);
  return (
    <MessagesContext.Provider value={{ rooms, setRooms }}>
      <Stack.Navigator initialRouteName="Conversations">
        <Stack.Screen name="Conversations" component={Conversations} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Friends" component={Friends} />
      </Stack.Navigator>
    </MessagesContext.Provider>
  );
};

export default Messages;
