// Utilities
import React from "react";
import { global } from "../../styles/globalStyles";
import landingPageImage from "../../assets/figma.png";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { useFonts, Fondamento_400Regular } from "@expo-google-fonts/fondamento";

const LandingPage = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Fondamento_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={global.container}>
      <ImageBackground
        source={landingPageImage}
        resizeMode="cover"
        style={global.backgroundImage}
      >
        <Text style={global.XMOVE}>
          <Text style={global.styledX}>X</Text>
          <Text>-move</Text>
        </Text>
        <View style={global.landingPageButtons}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={[global.loginButton, global.butt]}
          >
            <Text style={global.loginText}>LOG IN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={[global.registerButton, global.butt]}
          >
            <Text style={global.registerText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LandingPage;
