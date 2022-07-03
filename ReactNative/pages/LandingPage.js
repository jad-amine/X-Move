// Utilities
import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { global } from "../styles/globalStyles";
import landingPageImage from "../assets/signUp.png";

const LandingPage = () => {
  return (
    <>
      <ImageBackground
        source={landingPageImage}
        resizeMode="cover"
        style={global.backgroundImage}
      >
        <Text style={global.XMOVE}>X-move</Text>
        <View style={global.landingPageButtons}>
          <TouchableOpacity style={[global.loginButton, global.butt]}>
            <Text style={global.loginText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[global.registerButton, global.butt]}>
            <Text style={global.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};

export default LandingPage;
