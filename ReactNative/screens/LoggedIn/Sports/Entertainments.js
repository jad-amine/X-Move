import React from "react";
import { Text, TouchableOpacity, ScrollView } from "react-native";
import { global } from "../../../styles/globalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Entertainments = () => {
  const navigation = useNavigation();

  const navigateToSport = (sport) => {
    navigation.navigate("SportUsers", sport);
  };
  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => navigateToSport("Chess")}
        style={global.sportLayout}
      >
        <FontAwesome5 name="chess" size={30} color="black" />
        <Text style={global.iconGap}>Chess</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToSport("Cards")}
        style={global.sportLayout}
      >
        <MaterialCommunityIcons
          name="cards-playing-club-multiple"
          size={30}
          color="black"
        />
        <Text style={global.iconGap}>Cards</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToSport("Billiard")}
        style={global.sportLayout}
      >
        <MaterialCommunityIcons name="billiards" size={30} color="black" />
        <Text style={global.iconGap}>Billiard</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToSport("Babyfoot")}
        style={global.sportLayout}
      >
        <MaterialCommunityIcons name="table-picnic" size={30} color="black" />
        <Text style={global.iconGap}>Babyfoot</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToSport("Bowling")}
        style={global.sportLayout}
      >
        <FontAwesome5 name="bowling-ball" size={30} color="black" />
        <Text style={global.iconGap}>Bowling</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToSport("Domino")}
        style={global.sportLayout}
      >
        <MaterialCommunityIcons name="roller-skate" size={30} color="black" />
        <Text style={global.iconGap}>Domino</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Entertainments;
