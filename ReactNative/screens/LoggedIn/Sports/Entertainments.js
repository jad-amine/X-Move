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
        <FontAwesome5 name="chess" size={28} color="black" />
        <Text style={{ marginLeft: 30 }}>Chess</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <MaterialCommunityIcons
          name="cards-playing-club-multiple"
          size={28}
          color="black"
        />
        <Text style={{ marginLeft: 30 }}>Cards</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <MaterialCommunityIcons name="billiards" size={28} color="black" />
        <Text style={{ marginLeft: 30 }}>Billiardo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <MaterialCommunityIcons name="table-picnic" size={28} color="black" />
        <Text style={{ marginLeft: 30 }}>Babyfoot</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <FontAwesome5 name="bowling-ball" size={28} color="black" />
        <Text style={{ marginLeft: 30 }}>Bowling</Text>
      </TouchableOpacity>
      <TouchableOpacity style={global.sportLayout}>
        <MaterialCommunityIcons name="roller-skate" size={28} color="black" />
        <Text style={{ marginLeft: 30 }}>Domino</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Entertainments;
