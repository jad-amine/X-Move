import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { global } from "../styles/globalStyles";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SportContainer = ({ icon, library, name }) => {
  const navigation = useNavigation();

  return (
    <View style={global.sportsContainer}>
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
      <Text>{name} Sports</Text>
    </View>
  );
};

export default SportContainer;
