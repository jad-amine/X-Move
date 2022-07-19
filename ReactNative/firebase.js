import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  onSnapshot,
  setDoc,
  doc,
  addDoc,
} from "firebase/firestore";

import {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
} from "@env";

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};

// init firebase app
initializeApp(firebaseConfig);

// init firestore service (connect to db)
export const db = getFirestore();

// collection ref
export const colRef = collection(db, "messages");

// addDoc(colRef, {
//   text: messages,
//   createdAt: new Date(),
//   _id: user.info._id,
//   user: {
//     _id: "2",
//     name: "Sam",
//   },
// });

var messages = [];
const unsubCol = onSnapshot(colRef, (snapshot) => {
  // we put q instead of colRef to perform a query
  snapshot.docs.forEach((doc) => {
    messages.push({ ...doc.data() });
  });
});

export default messages;
