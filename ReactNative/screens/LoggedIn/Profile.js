import React, { useContext, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import { UserContext } from "../../contexts/UserContext";
import * as ImagePicker from "expo-image-picker";
import { global } from "../../styles/globalStyles";
import * as SecureStore from "expo-secure-store";
import UploadProfilePic from "../../components/UploadProfilePic";
import About from "../../components/About";
import { Button } from "react-native-paper";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [modalVisible, setModalVisible] = useState(false);

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
    setUser({
      info: {
        ...user.info,
        picture: result.base64,
      },
      token: user.token,
    });
    try {
      const response = await fetch(
        "http://10.0.2.2:4000/api/users/addProfilePicture",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({ base64: result.base64 }),
        }
      );
      const data = await response.json();
    } catch (err) {
      console.log("request error ==>", err);
    }
  };

  const changeProfilePic = () => {
    Alert.alert("Profile Picture", "Change Profile Picture ?", [
      {
        text: "Cancel",
        onPress: () => {},
      },
      { text: "Yes", onPress: pickImage },
    ]);
  };

  return (
    <ScrollView style={{ marginBottom: 40 }}>
      <Modal
        animationType="slide"
        // transparent={true}
        style={{ backgroundColor: "blue" }}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ flex: 1, backgroundColor: "#ddd" }}>
          <Text>Hello modal</Text>
        </View>
      </Modal>
      <View style={global.profileHeader}>
        {user.info.pictureURL ? (
          <TouchableOpacity onPress={changeProfilePic}>
            <Image
              source={{ uri: `http://10.0.2.2:4000/` + user.info.pictureURL }}
              style={{ height: 200, width: 200 }}
            />
          </TouchableOpacity>
        ) : (
          <UploadProfilePic pickImage={pickImage} />
        )}
        <View
          style={{
            flexDirection: "column",
            marginLeft: 40,
          }}
        >
          <Text style={{ fontSize: 40, marginBottom: 15 }}>
            {user.info.name}
          </Text>
          <Text style={{ color: "gray", fontSize: 20 }}>{user.info.email}</Text>
        </View>
      </View>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Button
            mode="outlined"
            color="tomato"
            onPress={() => setModalVisible(!modalVisible)}
            style={global.about}
          >
            Edit profile
          </Button>
        </View>
        <About user={user} />
        <Button
          mode="contained"
          title="Sign Out"
          onPress={() => {
            try {
              SecureStore.setItemAsync("token", "");
              setUser(null);
            } catch (err) {
              Alert.alert("Unable to logout ");
            }
          }}
        >
          Sign Out
        </Button>
      </View>
    </ScrollView>
  );
};

export default Profile;
