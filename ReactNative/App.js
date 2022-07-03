// Utilities
import { StatusBar } from "expo-status-bar";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import LandingPage from "./pages/LandingPage";
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
