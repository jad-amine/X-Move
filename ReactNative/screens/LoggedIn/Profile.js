import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import { UserContext } from "../../contexts/UserContext";
import * as ImagePicker from "expo-image-picker";

const Profile = () => {
  const { user } = useContext(UserContext);
  const info = JSON.stringify(user);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  };
  return (
    <View>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      <Text>{user.info.name}</Text>
      <Text>{user.info.email}</Text>
      <Text>{user.info.sports}</Text>
    </View>
  );
};

export default Profile;
