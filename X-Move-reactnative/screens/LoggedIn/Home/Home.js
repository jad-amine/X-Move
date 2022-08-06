// Utilities
import React from "react";
import { global } from "../../../styles/globalStyles";
import { View, ScrollView, Text } from "react-native";

// Component
import SportContainer from "../../../components/SportContainer";

const Home = () => {
  return (
    <ScrollView>
      <View style={global.home}>
        <Text style={global.homeText}>Choose your sport category</Text>
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
