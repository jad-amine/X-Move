import { View, Text } from "react-native";
import React from "react";

const About = ({ user }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 18,
        }}
      >
        I like doing Parkour and Freerunning
      </Text>
      <Text
        style={{
          textDecorationLine: "underline",
          color: "gray",
          fontSize: 20,
          marginVertical: 20,
        }}
      >
        Favorite Sports
      </Text>
      <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
        {user.info.sports.map((sport, index) => (
          <Text
            key={index}
            style={{
              margin: 8,
              fontSize: 18,
            }}
          >
            {sport + "  "} /
          </Text>
        ))}
      </View>
    </View>
  );
};

export default About;
