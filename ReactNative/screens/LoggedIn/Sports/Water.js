import React from "react";
import { Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { global } from "../../../styles/globalStyles";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import diving from "../../../assets/Diving.png";
import { useNavigation } from "@react-navigation/native";

const Water = () => {
  const navigation = useNavigation();

  const navigateToSport = (sport) => {
    navigation.navigate("SportUsers", sport);
  };
  return (
    <ScrollView style={{ marginBottom: 50 }}>
      <TouchableOpacity
        onPress={() => navigateToSport("Swim")}
        style={global.sportLayout}
      >
        <FontAwesome5 name="swimmer" size={30} color="black" />
        <Text style={global.iconGap}>Swim</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToSport("Surf")}
        style={global.sportLayout}
      >
        <MaterialCommunityIcons name="surfing" size={30} color="black" />
        <Text style={global.iconGap}>Surf</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToSport("Kitesurf")}
        style={global.sportLayout}
      >
        <MaterialCommunityIcons name="kitesurfing" size={30} color="black" />
        <Text style={global.iconGap}>KiteSurf</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToSport("Diving")}
        style={global.sportLayout}
      >
        <Image style={{ width: 30, height: 27 }} source={diving} />
        <Text style={global.iconGap}>Scuba-diving</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToSport("Sail")}
        style={global.sportLayout}
      >
        <MaterialCommunityIcons name="sail-boat" size={30} color="black" />
        <Text style={global.iconGap}>Sail</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToSport("Kayak")}
        style={global.sportLayout}
      >
        <MaterialCommunityIcons name="kayaking" size={30} color="black" />
        <Text style={global.iconGap}>Kayak</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Water;
