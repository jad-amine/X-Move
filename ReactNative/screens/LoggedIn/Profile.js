import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { UserContext } from "../../contexts/UserContext";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { global } from "../../styles/globalStyles";

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
    <View style={global.profileHeader}>
      <TouchableOpacity style={global.profilePic} onPress={pickImage}>
        <FontAwesome
          style={{ alignSelf: "center" }}
          name="user"
          size={50}
          color="gray"
        />
        <Entypo
          style={{ padding: 5, borderRadius: 20 }}
          name="camera"
          size={24}
          color="black"
        />
      </TouchableOpacity>
      <Text>{user.info.name}</Text>
      <Text>{user.info.email}</Text>
      <Text>{user.info.sports}</Text>
    </View>
  );
};

export default Profile;
