import { View, Text } from "react-native";
import React from "react";
import { Chip } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { global } from "../styles/globalStyles";

const About = ({ user }) => {
  return (
    <View>
      <View style={global.aboutIcon}>
        <AntDesign name="infocirlceo" size={24} color="rgb(88, 89, 88)" />
        <Text style={global.aboutWord}>About: </Text>
      </View>
      <Text>{user.info.about}</Text>
      <View style={global.aboutIcon}>
        <Fontisto name="favorite" size={24} color="rgb(88, 89, 88)" />
        <Text style={global.aboutWord}>Hobbies and interests </Text>
      </View>
      <View style={global.sportList}>
        {user.info.sports &&
          user.info.sports.map((sport, index) => (
            <Chip style={{ backgroundColor: "#ff4D00", margin: 5 }} key={index}>
              <Text style={{ color: "white" }}>{sport}</Text>
            </Chip>
          ))}
      </View>
    </View>
  );
};

export default About;
