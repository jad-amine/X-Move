// Utilities
import React from "react";
import { View, Text } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { global } from "../styles/globalStyles";
import { Chip, Divider } from "react-native-paper";

// Component
import PostCard from "./Feeds/PostCard";

const About = ({ user }) => {
  return (
    <View>
      <View style={global.aboutIcon}>
        <AntDesign name="infocirlceo" size={24} color="rgb(88, 89, 88)" />
        <Text style={global.aboutWord}>About: </Text>
      </View>
      <Text style={global.aboutPlayer}>{user.info.about}</Text>
      <Divider style={global.divider} />
      <View style={global.aboutIcon}>
        <Fontisto name="favorite" size={24} color="rgb(88, 89, 88)" />
        <Text style={global.aboutWord}>Hobbies and interests </Text>
      </View>
      <View style={global.sportsList}>
        {user.info.sports &&
          user.info.sports.map((sport, index) => (
            <Chip style={global.aboutChip} key={index}>
              <Text style={{ color: "white" }}>{sport}</Text>
            </Chip>
          ))}
      </View>
      <Divider style={global.divider} />
      <View style={global.postSection}>
        <Fontisto name="favorite" size={24} color="rgb(88, 89, 88)" />
        <Text style={global.aboutWord}>Posts </Text>
      </View>
      <View>
        {user.info.posts &&
          user.info.posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
      </View>
    </View>
  );
};

export default About;
