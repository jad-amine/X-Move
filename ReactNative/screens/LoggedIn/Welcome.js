// Utilities
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { global } from "../../styles/globalStyles";
import SportContainer from "../../components/SportContainer";

const Welcome = () => {
  return (
    <ScrollView>
      <View>
        <View style={global.welcomeContainer}>
          <SportContainer icon="dumbbell" library="MaterialCommunityIcons" />
          <SportContainer icon="bicycle" library="FontAwesome" />
          <SportContainer icon="surfing" library="MaterialCommunityIcons" />
          <SportContainer icon="skiing" library="FontAwesome5" />
          <SportContainer icon="baseball-ball" library="FontAwesome5" />
          <SportContainer icon="yoga" library="MaterialCommunityIcons" />
        </View>
      </View>
    </ScrollView>
  );
};

export default Welcome;
