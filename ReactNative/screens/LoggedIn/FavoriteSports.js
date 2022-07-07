import React, { useEffect, useState } from "react";
import { Text, ScrollView, TouchableOpacity, Image, View } from "react-native";
import { global } from "../../styles/globalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import PingPong from "../../assets/PingPong.png";
import Tennis from "../../assets/Tennis.png";
import diving from "../../assets/Diving.png";

const FavoriteSports = () => {
  const [ball, setBall] = useState(true);
  const [water, setWater] = useState(false);
  const [cycling, setCycling] = useState(false);
  const [fitness, setFitness] = useState(false);
  const [winter, setWinter] = useState(false);
  const [entertainments, setEntertainments] = useState(false);

  return (
    <ScrollView>
      {/* <MaterialCommunityIcons name="arrow-down-drop-circle-outline" size={24} color="black" /> */}
      {/* ==========Ball Sports========== */}
      <TouchableOpacity
        onPress={() => setBall(!ball)}
        style={global.sportSection}
      >
        <Text style={global.sportSectionText}>Ball Sports</Text>
        <MaterialCommunityIcons
          name={
            ball
              ? "arrow-up-drop-circle-outline"
              : "arrow-down-drop-circle-outline"
          }
          size={24}
          color="black"
        />
      </TouchableOpacity>
      {ball && (
        <>
          <TouchableOpacity
            onPress={() => navigateToSport("Football")}
            style={global.sportTab}
          >
            <Ionicons name="football" size={30} color="black" />
            <Text style={global.iconGap}>Football</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateToSport("Basketball")}
            style={global.sportTab}
          >
            <Ionicons name="basketball" size={30} color="black" />
            <Text style={global.iconGap}>Basketball</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateToSport("Volleyball")}
            style={global.sportTab}
          >
            <FontAwesome5 name="volleyball-ball" size={30} color="black" />
            <Text style={global.iconGap}>Volleyball</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateToSport("Rugby")}
            style={global.sportTab}
          >
            <Ionicons name="american-football" size={30} color="black" />
            <Text style={global.iconGap}>Rugby</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateToSport("Ping-Pong")}
            style={global.sportTab}
          >
            <Image source={PingPong} style={{ width: 30, height: 30 }} />
            <Text style={global.iconGap}>Ping-Pong</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateToSport("Tennis")}
            style={global.sportTab}
          >
            <Image source={Tennis} style={global.sportIcon} />
            <Text style={global.iconGap}>Tennis</Text>
          </TouchableOpacity>
        </>
      )}

      {/* ===========Water Sports=========== */}
      <TouchableOpacity
        onPress={() => setWater(!water)}
        style={global.sportSection}
      >
        <Text style={global.sportSectionText}>Water Sports</Text>
        <MaterialCommunityIcons
          name={
            water
              ? "arrow-up-drop-circle-outline"
              : "arrow-down-drop-circle-outline"
          }
          size={24}
          color="black"
        />
      </TouchableOpacity>
      {water && (
        <>
          <TouchableOpacity
            onPress={() => navigateToSport("Swim")}
            style={global.sportTab}
          >
            <FontAwesome5 name="swimmer" size={30} color="black" />
            <Text style={global.iconGap}>Swim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateToSport("Surf")}
            style={global.sportTab}
          >
            <MaterialCommunityIcons name="surfing" size={30} color="black" />
            <Text style={global.iconGap}>Surf</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateToSport("Kitesurf")}
            style={global.sportTab}
          >
            <MaterialCommunityIcons
              name="kitesurfing"
              size={30}
              color="black"
            />
            <Text style={global.iconGap}>KiteSurf</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateToSport("Diving")}
            style={global.sportTab}
          >
            <Image style={{ width: 30, height: 27 }} source={diving} />
            <Text style={global.iconGap}>Scuba-diving</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateToSport("Sail")}
            style={global.sportTab}
          >
            <MaterialCommunityIcons name="sail-boat" size={30} color="black" />
            <Text style={global.iconGap}>Sail</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateToSport("Kayak")}
            style={global.sportTab}
          >
            <MaterialCommunityIcons name="kayaking" size={30} color="black" />
            <Text style={global.iconGap}>Kayak</Text>
          </TouchableOpacity>
        </>
      )}

      {/* ==========Cycling Sports========== */}
      <TouchableOpacity
        onPress={() => setCycling(!cycling)}
        style={global.sportSection}
      >
        <Text style={global.sportSectionText}>Cycling Sports</Text>
        <MaterialCommunityIcons
          name={
            cycling
              ? "arrow-up-drop-circle-outline"
              : "arrow-down-drop-circle-outline"
          }
          size={24}
          color="black"
        />
      </TouchableOpacity>
      {cycling && (
        <>
          <TouchableOpacity
            onPress={() => navigateToSport("Road Bike")}
            style={global.sportTab}
          >
            <MaterialCommunityIcons name="bike-fast" size={30} color="black" />
            <Text style={global.iconGap}>Road bike</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateToSport("E-Bike")}
            style={global.sportTab}
          >
            <MaterialIcons name="electric-bike" size={30} color="black" />
            <Text style={global.iconGap}>E-Bike</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateToSport("SkateBoard")}
            style={global.sportTab}
          >
            <MaterialCommunityIcons
              name="skateboarding"
              size={30}
              color="black"
            />
            <Text style={global.iconGap}>SkateBoard</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateToSport("Rollerskate")}
            style={global.sportTab}
          >
            <MaterialCommunityIcons
              name="roller-skate"
              size={30}
              color="black"
            />
            <Text style={global.iconGap}>Rollerskate</Text>
          </TouchableOpacity>
        </>
      )}

      {/* ==========Fitness Sports========== */}
      <TouchableOpacity
        onPress={() => setFitness(!fitness)}
        style={global.sportSection}
      >
        <Text style={global.sportSectionText}>Fitness Sports</Text>
        <MaterialCommunityIcons
          name={
            fitness
              ? "arrow-up-drop-circle-outline"
              : "arrow-down-drop-circle-outline"
          }
          size={24}
          color="black"
        />
      </TouchableOpacity>
      {fitness && (
        <>
          <TouchableOpacity
            onPress={() => navigateToSport("Run")}
            style={global.sportTab}
          >
            <FontAwesome5 name="running" size={30} color="black" />
            <Text style={global.iconGap}>Run</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateToSport("Hike")}
            style={global.sportTab}
          >
            <FontAwesome5 name="hiking" size={30} color="black" />
            <Text style={global.iconGap}>Hike</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateToSport("Gym")}
            style={global.sportTab}
          >
            <FontAwesome5 name="dumbbell" size={30} color="black" />
            <Text style={global.iconGap}>Gym</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateToSport("Gym")}
            style={global.sportTab}
          >
            <MaterialCommunityIcons
              name="dance-ballroom"
              size={30}
              color="black"
            />
            <Text style={global.iconGap}>Dance</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateToSport("Yoga")}
            style={global.sportTab}
          >
            <MaterialCommunityIcons name="yoga" size={30} color="black" />
            <Text style={global.iconGap}>Yoga</Text>
          </TouchableOpacity>
        </>
      )}

      {/* ==========Winter Sports========== */}
      <TouchableOpacity
        onPress={() => setWinter(!winter)}
        style={global.sportSection}
      >
        <Text style={global.sportSectionText}>Winter Sports</Text>
        <MaterialCommunityIcons
          name={
            winter
              ? "arrow-up-drop-circle-outline"
              : "arrow-down-drop-circle-outline"
          }
          size={24}
          color="black"
        />
      </TouchableOpacity>
      {winter && (
        <>
          <TouchableOpacity
            onPress={() => navigateToSport("Ski")}
            style={global.sportTab}
          >
            <FontAwesome5 name="skiing" size={30} color="black" />
            <Text style={global.iconGap}>Ski</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateToSport("Snowboard")}
            style={global.sportTab}
          >
            <FontAwesome5 name="snowboarding" size={30} color="black" />
            <Text style={global.iconGap}>Snowboard</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateToSport("Iceskate")}
            style={global.sportTab}
          >
            <FontAwesome5 name="skating" size={30} color="black" />
            <Text style={global.iconGap}>Ice-Skate</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateToSport("Skidoo")}
            style={global.sportTab}
          >
            <MaterialCommunityIcons name="snowmobile" size={30} color="black" />
            <Text style={global.iconGap}>Ski-Doo</Text>
          </TouchableOpacity>
        </>
      )}

      {/* ==========Entertainments Sports========== */}
      <TouchableOpacity
        onPress={() => setEntertainments(!entertainments)}
        style={global.sportSection}
      >
        <Text style={global.sportSectionText}>Entertainments Sports</Text>
        <MaterialCommunityIcons
          name={
            entertainments
              ? "arrow-up-drop-circle-outline"
              : "arrow-down-drop-circle-outline"
          }
          size={24}
          color="black"
        />
      </TouchableOpacity>
      {entertainments && (
        <>
          <TouchableOpacity
            onPress={() => navigateToSport("Chess")}
            style={global.sportTab}
          >
            <FontAwesome5 name="chess" size={30} color="black" />
            <Text style={global.iconGap}>Chess</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateToSport("Cards")}
            style={global.sportTab}
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
            style={global.sportTab}
          >
            <MaterialCommunityIcons name="billiards" size={30} color="black" />
            <Text style={global.iconGap}>Billiard</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateToSport("Babyfoot")}
            style={global.sportTab}
          >
            <MaterialCommunityIcons
              name="table-picnic"
              size={30}
              color="black"
            />
            <Text style={global.iconGap}>Babyfoot</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateToSport("Bowling")}
            style={global.sportTab}
          >
            <FontAwesome5 name="bowling-ball" size={30} color="black" />
            <Text style={global.iconGap}>Bowling</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateToSport("Domino")}
            style={global.sportTab}
          >
            <MaterialCommunityIcons
              name="roller-skate"
              size={30}
              color="black"
            />
            <Text style={global.iconGap}>Domino</Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
};

export default FavoriteSports;
