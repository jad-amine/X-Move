// Utilities
import { StatusBar } from "expo-status-bar";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserContext } from "./contexts/UserContext";

// Screens
import LandingPage from "./screens/LandingPage";
import Login from "./screens/Login";
import { useEffect, useState } from "react";
import Home from "./screens/Home";
import { Text } from "react-native";

const stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  // Check if the user is Logged IN
  useEffect(() => {
    const authUser = async () => {
      try {
        let token = await SecureStore.getItemAsync("token");
        const response = await fetch("http://10.0.2.2:4000/api/users/getData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ mission: "Auth User" }),
        });
        const json = await response.json();
        if (json.status !== "Verified") {
          setUser(null);
          return;
        } else {
          setUser(null);
          return;
        }
      } catch (err) {
        console.log(err.message, "Fix the request");
      }
    };
    authUser();
  }, []);

  // If the user is not Logged IN
  if (!user) {
    return (
      <UserContext.Provider value={{ setUser }}>
        <NavigationContainer>
          <stack.Navigator>
            <stack.Screen
              name="Landing Page"
              component={LandingPage}
              options={{ headerShown: false }}
            />
            <stack.Screen
              name="back"
              component={Login}
              options={{ headerTransparent: true }}
            />
          </stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </UserContext.Provider>
    );
  } else {
    return (
      <>
        <Text>{JSON.stringify(user)}</Text>
      </>
    );
  }
}
