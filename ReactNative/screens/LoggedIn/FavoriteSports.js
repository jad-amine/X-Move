import React, { useContext, useState } from "react";
import { Text, ScrollView, TouchableOpacity, Image, View } from "react-native";
import { global } from "../../styles/globalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { UserContext } from "../../contexts/UserContext";
import FavoriteSport from "../../components/FavoriteSport";

const FavoriteSports = () => {
  const { user, setUser } = useContext(UserContext);
  const sports = user.info.sports;
  const [fitness, setFitness] = useState(true);
  const [ball, setBall] = useState(false);
  const [water, setWater] = useState(false);
  const [cycling, setCycling] = useState(false);
  const [winter, setWinter] = useState(false);
  const [entertainments, setEntertainments] = useState(false);

  return (
    <ScrollView>
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
          size={30}
          color="black"
        />
      </TouchableOpacity>
      {fitness && (
        <>
          <FavoriteSport
            name="Run"
            iconName="running"
            iconLibrary="FontAwesome5"
          />
          <FavoriteSport
            name="Hike"
            iconName="hiking"
            iconLibrary="FontAwesome5"
          />
          <FavoriteSport
            name="Gym"
            iconName="dumbbell"
            iconLibrary="FontAwesome5"
          />
          <FavoriteSport
            name="Dance"
            iconName="dance-ballroom"
            iconLibrary="MaterialCommunityIcons"
          />
          <FavoriteSport
            name="Yoga"
            iconName="yoga"
            iconLibrary="MaterialCommunityIcons"
          />
        </>
      )}

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
          size={30}
          color="black"
        />
      </TouchableOpacity>
      {ball && (
        <>
          <FavoriteSport
            name="Football"
            iconName="football"
            iconLibrary="Ionicons"
          />
          <FavoriteSport
            name="Basketball"
            iconName="basketball"
            iconLibrary="Ionicons"
          />
          <FavoriteSport
            name="Volleyball"
            iconName="volleyball-ball"
            iconLibrary="FontAwesome5"
          />
          <FavoriteSport
            name="Rugby"
            iconName="american-football"
            iconLibrary="Ionicons"
          />
          <FavoriteSport name="Ping-Pong" image="PingPong" />
          <FavoriteSport name="Tennis" image="Tennis" />
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
          size={30}
          color="black"
        />
      </TouchableOpacity>
      {water && (
        <>
          <FavoriteSport
            name="Swim"
            iconName="swimmer"
            iconLibrary="FontAwesome5"
          />

          <FavoriteSport
            name="Surf"
            iconName="surfing"
            iconLibrary="MaterialCommunityIcons"
          />
          <FavoriteSport
            name="KiteSurf"
            iconName="kitesurfing"
            iconLibrary="MaterialCommunityIcons"
          />

          <FavoriteSport name="Scuba-diving" image="diving" />

          <FavoriteSport
            name="Sail"
            iconName="sail-boat"
            iconLibrary="MaterialCommunityIcons"
          />
          <FavoriteSport
            name="Kayak"
            iconName="kayaking"
            iconLibrary="MaterialCommunityIcons"
          />
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
          <FavoriteSport
            name="Road bike"
            iconName="bike-fast"
            iconLibrary="MaterialCommunityIcons"
          />

          <FavoriteSport
            name="E-Bike"
            iconName="electric-bike"
            iconLibrary="MaterialIcons"
          />

          <FavoriteSport
            name="SkateBoard"
            iconName="skateboarding"
            iconLibrary="MaterialCommunityIcons"
          />

          <FavoriteSport
            name="Rollerskate"
            iconName="roller-skate"
            iconLibrary="MaterialCommunityIcons"
          />
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
          <FavoriteSport
            name="Ski"
            iconName="skiing"
            iconLibrary="FontAwesome5"
          />

          <FavoriteSport
            name="Snowboard"
            iconName="snowboarding"
            iconLibrary="FontAwesome5"
          />

          <FavoriteSport
            name="Ice-Skate"
            iconName="skating"
            iconLibrary="FontAwesome5"
          />

          <FavoriteSport
            name="Ski-Doo"
            iconName="snowmobile"
            iconLibrary="MaterialCommunityIcons"
          />
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
          <FavoriteSport
            name="Chess"
            iconName="chess"
            iconLibrary="FontAwesome5"
          />

          <FavoriteSport
            name="Bowling"
            iconName="bowling-ball"
            iconLibrary="FontAwesome5"
          />
          <FavoriteSport
            name="Billiard"
            iconName="billiards"
            iconLibrary="MaterialCommunityIcons"
          />

          <FavoriteSport
            name="Babyfoot"
            iconName="table-picnic"
            iconLibrary="MaterialCommunityIcons"
          />

          <FavoriteSport
            name="Cards"
            iconName="cards-playing-club-multiple"
            iconLibrary="MaterialCommunityIcons"
          />

          <FavoriteSport
            name="Risk"
            iconName="asterisk"
            iconLibrary="FontAwesome5"
          />
        </>
      )}
    </ScrollView>
  );
};

export default FavoriteSports;
