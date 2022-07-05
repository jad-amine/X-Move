import React, { useContext } from "react";
import { Text } from "react-native";
import { UserContext } from "../../contexts/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  const info = JSON.stringify(user);
  return (
    <>
      <Text>{user.info.name}</Text>
      <Text>{user.info.email}</Text>
      <Text>{user.info.sports}</Text>
    </>
  );
};

export default Profile;
