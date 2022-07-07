import React from "react";
import { Text, TouchableOpacity, ScrollView } from "react-native";
import { global } from "../../../styles/globalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Cycling = () => {
  const navigation = useNavigation();

  const navigateToSport = (sport) => {
    navigation.navigate("SportUsers", sport);
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
