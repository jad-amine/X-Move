// @refresh reset
// Utilities
import { StatusBar } from "expo-status-bar";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserContext } from "./contexts/UserContext";
import { useEffect, useState } from "react";
console.disableYellowBox = true;
import API from "./api";

// Screens
import Login from "./screens/NotLoggedIN/Login";
import LandingPage from "./screens/NotLoggedIN/LandingPage";
import Register from "./screens/NotLoggedIN/Register";
import DrawerNavigator from "./screens/LoggedIn/DrawerNavigator";

const stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  // Check if the user is Logged IN
  useEffect(() => {
    const authUser = async () => {
      try {
        let token = await SecureStore.getItemAsync("token");
        if (!token) {
          return;
        }
        const { data } = await API.post(
          "getUserData",
          { mission: "Auth User" },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (data.status !== "Verified") {
          setUser(null);
          return;
        } else {
          setUser({ info: data.user, token: token });
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
              name="Login"
              component={Login}
              options={{ headerTransparent: true }}
            />
            <stack.Screen
              name="Register"
              component={Register}
              options={{ headerTransparent: true }}
            />
          </stack.Navigator>
          <StatusBar hidden={true} />
        </NavigationContainer>
      </UserContext.Provider>
    );
  } else {
    return (
      <UserContext.Provider value={{ user, setUser }}>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </UserContext.Provider>
    );
  }
}
