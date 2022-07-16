import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "./Chat";
import Conversations from "./Conversations";
import {
  getFirestore,
  collection,
  onSnapshot,
  initializeFirestore,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";

import {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
} from "@env";
import { MessagesContext } from "../../../contexts/MessagesContext";

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};

const Stack = createNativeStackNavigator();

const Messages = ({ route }) => {
  const [allMessages, setAllMessages] = useState(null);
  var db;
  var colRef;
  var app;
  useEffect(() => {
    // init firebase app
    app = initializeApp(firebaseConfig);

    // init firestore service (connect to db)
    db = initializeFirestore(app, { experimentalForceLongPolling: true });
    // db = getFirestore();

    // collection ref
    colRef = collection(db, "messages");

    const unsubCol = onSnapshot(colRef, (snapshot) => {
      // we put q instead of colRef to perform a query
      let messages = [];
      snapshot.docs.forEach((doc) => {
        messages.push({ ...doc.data() });
      });
      setAllMessages(messages);
    });
  }, []);
  return (
    <MessagesContext.Provider
      value={{ allMessages, setAllMessages, db, colRef }}
    >
      <Stack.Navigator initialRouteName="Conversations">
        <Stack.Screen name="Conversations" component={Conversations} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </MessagesContext.Provider>
  );
};

export default Messages;
