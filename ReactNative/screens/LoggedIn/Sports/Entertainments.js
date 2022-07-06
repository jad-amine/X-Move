import React from "react";
import { Text, TouchableOpacity, ScrollView } from "react-native";
import { global } from "../../../styles/globalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Entertainments = () => {
  return (
    <ScrollView>
      <TouchableOpacity style={global.sportLayout}>
        <FontAwesome5 name="chess" size={30} color="black" />
        <Text style={global.iconGap}>Chess</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <MaterialCommunityIcons
          name="cards-playing-club-multiple"
          size={30}
          color="black"
        />
        <Text style={global.iconGap}>Cards</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <MaterialCommunityIcons name="billiards" size={30} color="black" />
        <Text style={global.iconGap}>Billiardo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <MaterialCommunityIcons name="table-picnic" size={30} color="black" />
        <Text style={global.iconGap}>Babyfoot</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <FontAwesome5 name="bowling-ball" size={30} color="black" />
        <Text style={global.iconGap}>Bowling</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <MaterialCommunityIcons name="roller-skate" size={30} color="black" />
        <Text style={global.iconGap}>Domino</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Entertainments;
