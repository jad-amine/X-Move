// Utilities
import React from "react";
import loginImage from "../assets/loginImage.png";
import {
  ImageBackground,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { global } from "../styles/globalStyles";

const Login = () => {
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
          <TextInput style={global.loginInput} />
          <Text style={global.loginLabel}>Password:</Text>
          <TextInput style={global.loginInput} />
          <TouchableOpacity style={global.login}>
            <Text style={[global.loginText, { color: "white" }]}>LOG IN</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
