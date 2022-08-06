// Utilities
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { global } from "../../../../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, ScrollView } from "react-native";

const Cycling = () => {
  const navigation = useNavigation();
  const navigateToSport = (sport) => {
    navigation.navigate("Players", sport);
  };

  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => navigateToSport("Road Bike")}
        style={global.sportLayout}
      >
        <MaterialCommunityIcons name="bike-fast" size={30} color="black" />
        <Text style={global.iconGap}>Road bike</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToSport("E-Bike")}
        style={global.sportLayout}
      >
        <MaterialIcons name="electric-bike" size={30} color="black" />
        <Text style={global.iconGap}>E-Bike</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToSport("SkateBoard")}
        style={global.sportLayout}
      >
        <MaterialCommunityIcons name="skateboarding" size={30} color="black" />
        <Text style={global.iconGap}>SkateBoard</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToSport("Rollerskate")}
        style={global.sportLayout}
      >
        <MaterialCommunityIcons name="roller-skate" size={30} color="black" />
        <Text style={global.iconGap}>Rollerskate</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Cycling;
