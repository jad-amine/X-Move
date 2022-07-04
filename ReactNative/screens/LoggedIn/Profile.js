import React, { useContext } from "react";
import { Text } from "react-native";
import { UserContext } from "../../contexts/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  return <Text>Profile</Text>;
};

export default Profile;
