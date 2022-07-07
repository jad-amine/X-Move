import React from "react";
import { Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { global } from "../../styles/globalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import PingPong from "../../assets/PingPong.png";
import Tennis from "../../assets/Tennis.png";
import diving from "../../assets/Diving.png";

const FavoriteSports = () => {
  return (
    <ScrollView>
      <Text>Ball</Text>
      <TouchableOpacity
        onPress={() => navigateToSport("Football")}
        style={global.sportLayout}
      >
        <Ionicons name="football" size={30} color="black" />
        <Text style={global.iconGap}>Football</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToSport("Basketball")}
        style={global.sportLayout}
      >
        <Ionicons name="basketball" size={30} color="black" />
        <Text style={global.iconGap}>Basketball</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToSport("Volleyball")}
        style={global.sportLayout}
      >
        <FontAwesome5 name="volleyball-ball" size={30} color="black" />
        <Text style={global.iconGap}>Volleyball</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToSport("Rugby")}
        style={global.sportLayout}
      >
        <Ionicons name="american-football" size={30} color="black" />
        <Text style={global.iconGap}>Rugby</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToSport("Ping-Pong")}
        style={global.sportLayout}
      >
        <Image source={PingPong} style={{ width: 30, height: 30 }} />
        <Text style={global.iconGap}>Ping-Pong</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToSport("Tennis")}
        style={global.sportLayout}
      >
        <Image source={Tennis} style={global.sportIcon} />
        <Text style={global.iconGap}>Tennis</Text>
      </TouchableOpacity>
      <Text>Water Sports</Text>
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
      <Text>Cycling</Text>
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
      <Text>Fitness Sports</Text>
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
      <Text>Winter Sports</Text>
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
      <Text>Entertainments Sports</Text>
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

export default FavoriteSports;
