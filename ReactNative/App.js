// Utilities
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as SecureStore from "expo-secure-store";

// Screens
import LandingPage from "./pages/LandingPage";
import { global } from "./styles/globalStyles";

export default function App() {
  return (
    <View style={global.container}>
      <LandingPage />
      <StatusBar style="auto" />
    </View>
  );
}
