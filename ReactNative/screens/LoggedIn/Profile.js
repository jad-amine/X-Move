import React, { useContext, useState } from "react";
import {
  Alert,
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { UserContext } from "../../contexts/UserContext";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { global } from "../../styles/globalStyles";
import * as SecureStore from "expo-secure-store";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    if (result.cancelled) return;
    try {
      const response = await fetch(
        "http://10.0.2.2:4000/api/users/addProfilePicture",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({ base64: result }),
        }
      );
      const data = await response.json();
      setImage(data.uri);

      console.log(data);
    } catch (err) {
      console.log("request error ==>", err);
    }
  };
  return (
    <View>
      <View style={global.profileHeader}>
        {!user.info.picture && (
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
        )}
        {user.info.picture && <Image source={user.info.picture} />}
        <View style={{ flexDirection: "column", marginLeft: 20 }}>
          <Text>{user.info.name}</Text>
          <Text>{user.info.email}</Text>
          <Text>{user.info.sports}</Text>
        </View>
      </View>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      <Button
        title="Sign Out"
        onPress={() => {
          try {
            SecureStore.setItemAsync("token", null);
            setUser(null);
          } catch (err) {
            Alert.alert("Unable to logout ");
          }
        }}
      />
      <Text onPress={() => console.log(user.info.picture)}>Hello</Text>
    </View>
  );
};

export default Profile;
