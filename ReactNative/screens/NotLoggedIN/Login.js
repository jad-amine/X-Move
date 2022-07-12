// Utilities
import React, { useContext, useState } from "react";
import loginImage from "../../assets/loginImage.png";
import {
  Alert,
  ImageBackground,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { global } from "../../styles/globalStyles";
import { UserContext } from "../../contexts/UserContext";

const Login = ({ navigation }) => {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://10.0.2.2:4000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });
      const json = await response.json();
      if (json.message === "Invalid Credentials") {
        Alert.alert(json.message, "Incorrect email or password !");
        return;
      }
      await SecureStore.setItemAsync("token", json.token);
      await AsyncStorage.setItem("picture", json.user.picture);
      console.log(json.user.picture);
      await setUser({ info: json.user, token: json.token });
      navigation.navigate("Landing Page");
    } catch (err) {
      console.log(err.message, "Something wrong with the request");
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={global.container}>
        <ImageBackground
          source={loginImage}
          resizeMode="cover"
          style={global.loginBackgroundImage}
        >
          <Text style={global.loginHead}>Login</Text>
          <Text style={global.loginLabel}>Email:</Text>
          <TextInput
            onChangeText={(val) => {
              setEmail(val);
            }}
            style={global.loginInput}
          />
          <Text style={global.loginLabel}>Password:</Text>
          <TextInput
            secureTextEntry
            onChangeText={(val) => {
              setPassword(val);
            }}
            style={global.loginInput}
          />
          <TouchableOpacity onPress={handleLogin} style={global.login}>
            <Text style={[global.loginText, { color: "white" }]}>LOG IN</Text>
          </TouchableOpacity>
          <Text style={global.alreadyUser}>
            Don't have an account?
            <Text
              onPress={() => {
                navigation.navigate("Register");
              }}
              style={{ color: "#FF4D00" }}
            >
              {"  "}
              Sign Up
            </Text>
          </Text>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
