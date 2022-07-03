// Utilities
import React, { useState } from "react";
import loginImage from "../assets/loginImage.png";
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
import { global } from "../styles/globalStyles";

const Login = () => {
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
      await SecureStore.setItemAsync("token", json);
      let token = await SecureStore.getItemAsync("token");
      console.log("your token is" + token);
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
            onChangeText={(val) => {
              setPassword(val);
            }}
            style={global.loginInput}
          />
          <TouchableOpacity onPress={handleLogin} style={global.login}>
            <Text style={[global.loginText, { color: "white" }]}>LOG IN</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
