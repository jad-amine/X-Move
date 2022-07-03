// Utilities
import React from "react";
import loginImage from "../assets/loginImage.png";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { global } from "../styles/globalStyles";

const Login = () => {
  return (
    <View style={global.container}>
      <ImageBackground
        source={loginImage}
        resizeMode="cover"
        style={global.backgroundImage}
      >
        <Text style={global.loginHead}>Login</Text>
      </ImageBackground>
    </View>
  );
};

export default Login;
