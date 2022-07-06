import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { global } from "../styles/globalStyles";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Entert from "../assets/Entertainment.png";

const SportContainer = ({ icon, library, name }) => {
  const navigation = useNavigation();

  return (
    <View style={global.sportsContainer}>
      {icon ? (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate({ name });
          }}
          style={global.sportsCategories}
        >
          {library === "MaterialCommunityIcons" ? (
            <MaterialCommunityIcons name={icon} size={70} color="tomato" />
          ) : library === "FontAwesome" ? (
            <FontAwesome name={icon} size={70} color="tomato" />
          ) : library === "FontAwesome5" ? (
            <FontAwesome5 name={icon} size={70} color="tomato" />
          ) : (
            ""
          )}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate({ name });
          }}
          style={global.sportsCategories}
        >
          <Image source={Entert} style={{ height: 60, width: 60 }} />
        </TouchableOpacity>
      )}
      <Text>{name} Sports</Text>
    </View>
  );
};

export default SportContainer;
