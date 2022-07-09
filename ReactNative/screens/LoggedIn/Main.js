import { View, ScrollView } from "react-native";
import React from "react";
import SportContainer from "../../components/SportContainer";

const Main = () => {
  return (
    <ScrollView>
      <View style={{ marginBottom: 50 }}>
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

export default Main;
