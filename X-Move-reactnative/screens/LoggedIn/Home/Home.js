import React from "react";
import { View, ScrollView, Text } from "react-native";
import SportContainer from "../../../components/SportContainer";

const Home = () => {
  return (
    <ScrollView>
      <View style={{ marginBottom: 50 }}>
        <Text
          style={{
            margin: 10,
            alignSelf: "center",
            fontSize: 20,
            color: "gray",
          }}
        >
          Choose your sport category
        </Text>
        <SportContainer name="Ball" />
        <SportContainer name="Water" />
        <SportContainer name="Cycling" />
        <SportContainer name="Fitness" />
        <SportContainer name="Winter" />
        <SportContainer name="Entertainment" />
      </View>
    </ScrollView>
  );
};

export default Home;
