import React from "react";
import { Text, TouchableOpacity, ScrollView } from "react-native";
import { global } from "../../../../styles/globalStyles";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Winter = () => {
  const navigation = useNavigation();

  const navigateToSport = (sport) => {
    navigation.navigate("SportUsers", sport);
  };
  return (
    <ScrollView style={{ marginBottom: 50 }}>
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
