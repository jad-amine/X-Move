// Utilities
import { StatusBar } from "expo-status-bar";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import { useEffect } from "react";

const stack = createNativeStackNavigator();

export default function App() {
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
        console.log(json);
      } catch (err) {
        console.log(err.message, "Fix the request");
      }
    };
    authUser();
  }, []);
  return (
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
  );
}
