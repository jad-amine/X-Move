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
      const { data } = await API.post("register", { name, email, password });
      if (data.message === "User already exists !") {
        Alert.alert(data.message, "Choose another email address !");
        return;
      }
      await SecureStore.setItemAsync("token", data.token);
      await setUser({ info: data.user, token: data.token });
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
              style={global.color}
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
