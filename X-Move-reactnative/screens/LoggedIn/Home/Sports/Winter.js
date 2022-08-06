import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { global } from "../../../../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, ScrollView } from "react-native";

const Winter = () => {
  const navigation = useNavigation();
  const navigateToSport = (sport) => {
    navigation.navigate("Players", sport);
  };

  return (
    <ScrollView style={global.safeArea}>
      <TouchableOpacity
        onPress={() => navigateToSport("Ski")}
        style={global.sportLayout}
      >
        <FontAwesome5 name="skiing" size={30} color="black" />
        <Text style={global.iconGap}>Ski</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToSport("Snowboard")}
        style={global.sportLayout}
      >
        <FontAwesome5 name="snowboarding" size={30} color="black" />
        <Text style={global.iconGap}>Snowboard</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToSport("Iceskate")}
        style={global.sportLayout}
      >
        <FontAwesome5 name="skating" size={30} color="black" />
        <Text style={global.iconGap}>Ice-Skate</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToSport("Skidoo")}
        style={global.sportLayout}
      >
        <MaterialCommunityIcons name="snowmobile" size={30} color="black" />
        <Text style={global.iconGap}>Ski-Doo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Winter;
