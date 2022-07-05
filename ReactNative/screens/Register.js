// Utilities
import React, { useContext, useState } from "react";
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
import { UserContext } from "../contexts/UserContext";

const Register = ({ navigation }) => {
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      if (!name || !email || !password) {
        Alert.alert("Please add all fields !");
        return;
      }
      const response = await fetch("http://10.0.2.2:4000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, email: email, password: password }),
      });
      const json = await response.json();
      if (json.message === "User already exists !") {
        Alert.alert(json.message, "Choose another email address !");
        return;
      }
      await SecureStore.setItemAsync("token", json.token);
      await setUser({ info: json.user, token: json.token });
      // navigation.navigate("Landing Page");
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
          <Text style={global.registerHead}>Register</Text>
          <Text style={global.loginLabel}>Name:</Text>
          <TextInput
            onChangeText={(val) => {
              setName(val);
            }}
            style={global.registerInput}
          />
          <Text style={global.loginLabel}>Email:</Text>
          <TextInput
            onChangeText={(val) => {
              setEmail(val);
            }}
            style={global.registerInput}
          />
          <Text style={global.loginLabel}>Password:</Text>
          <TextInput
            secureTextEntry
            onChangeText={(val) => {
              setPassword(val);
            }}
            style={global.registerInput}
          />
          <TouchableOpacity onPress={handleRegister} style={global.login}>
            <Text style={[global.loginText, { color: "white" }]}>Register</Text>
          </TouchableOpacity>
          <Text style={global.alreadyUser}>
            Alreday have an account?
            <Text
              onPress={() => {
                navigation.navigate("Login");
              }}
              style={{ color: "#FF4D00" }}
            >
              {"  "}
              Sign In
            </Text>
          </Text>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Register;
