import { View, ScrollView } from "react-native";
import React from "react";
import SportContainer from "../../components/SportContainer";
import { global } from "../../styles/globalStyles";

const Main = () => {
  return (
    <ScrollView>
      <View>
        <View style={global.welcomeContainer}>
          <SportContainer
            name="Fitness"
            icon="dumbbell"
            library="MaterialCommunityIcons"
          />
          <SportContainer name="Cycling" icon="bicycle" library="FontAwesome" />
          <SportContainer
            name="Water"
            icon="surfing"
            library="MaterialCommunityIcons"
          />
          <SportContainer name="Winter" icon="skiing" library="FontAwesome5" />
          <SportContainer
            name="Ball"
            icon="baseball-ball"
            library="FontAwesome5"
          />
          <SportContainer
            name="Flexibility"
            icon="yoga"
            library="MaterialCommunityIcons"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Main;
