// Utilities
import React, { useContext, useState } from "react";
import loginImage from "../../assets/signUP.png";
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
import { global } from "../../styles/globalStyles";
import { UserContext } from "../../contexts/UserContext";
import API from "../../api";

const Login = ({ navigation }) => {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const { data } = await API.post("login/", {
        email: email,
        password: password,
      });
      if (data.message === "Invalid Credentials") {
        Alert.alert(data.message, "Incorrect email or password !");
        return;
      }
      await SecureStore.setItemAsync("token", data.token);
      await setUser({ info: data.user, token: data.token });
      navigation.navigate("Landing Page");
    } catch (err) {
      Alert.alert("Incorrect email or password !");
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
              style={global.color}
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
