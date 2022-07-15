import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import logo from "../../assets/logo.png";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";

// Screens
import BottomTab from "./Home/BottomTab";
import FavoriteSports from "./FavoriteSports";
import { MessagesContext } from "../../contexts/MessagesContext";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const [messages, setMessages] = useState(null);
  useEffect(() => {
    // init firebase app
    initializeApp(firebaseConfig);

    // init firestore service (connect to db)
    const db = getFirestore();

    // collection ref
    const colRef = collection(db, "messages");

    const unsubCol = onSnapshot(colRef, (snapshot) => {
      // we put q instead of colRef to perform a query
      let messages = [];
      snapshot.docs.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
  }, []);

  return (
    <MessagesContext.Provider value={{ messages, setMessages }}>
      <Drawer.Navigator
        initialRouteName="BottomTab"
        screenOptions={{
          drawerType: "back",
          headerTitle: "X-Move",
          headerTitleAlign: "center",
          headerRight: () => (
            <Image
              source={logo}
              style={{
                width: 50,
                height: 50,
                borderRadius: 20,
                marginRight: 10,
              }}
            />
          ),
          headerStyle: { height: 70, backgroundColor: "#FF4D00" },
          headerTintColor: "white",
          headerTitleStyle: { fontSize: 30 },
        }}
      >
        <Drawer.Screen name="BottomTab" component={BottomTab} />
        <Drawer.Screen name="Favorite Sports" component={FavoriteSports} />
      </Drawer.Navigator>
    </MessagesContext.Provider>
  );
};

export default DrawerNavigator;
