// Utilities
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { global } from "../../../../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, ScrollView } from "react-native";

const Fitness = () => {
  const navigation = useNavigation();
  const navigateToSport = (sport) => {
    navigation.navigate("Players", sport);
  };

  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => navigateToSport("Run")}
        style={global.sportLayout}
      >
        <FontAwesome5 name="running" size={30} color="black" />
        <Text style={global.iconGap}>Run</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToSport("Hike")}
        style={global.sportLayout}
      >
        <FontAwesome5 name="hiking" size={30} color="black" />
        <Text style={global.iconGap}>Hike</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToSport("Gym")}
        style={global.sportLayout}
      >
        <FontAwesome5 name="dumbbell" size={30} color="black" />
        <Text style={global.iconGap}>Gym</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToSport("Gym")}
        style={global.sportLayout}
      >
        <MaterialCommunityIcons name="dance-ballroom" size={30} color="black" />
        <Text style={global.iconGap}>Dance</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToSport("Yoga")}
        style={global.sportLayout}
      >
        <MaterialCommunityIcons name="yoga" size={30} color="black" />
        <Text style={global.iconGap}>Yoga</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Fitness;
