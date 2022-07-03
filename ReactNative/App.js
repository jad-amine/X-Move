// Utilities
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import LandingPage from "./pages/LandingPage";
import { global } from "./styles/globalStyles";
import Login from "./pages/Login";

const stack = createNativeStackNavigator();
export default function App() {
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
