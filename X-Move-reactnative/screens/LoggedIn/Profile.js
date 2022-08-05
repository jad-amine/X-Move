// Utilities
import API from "../../api";
import uuid from "react-native-uuid";
import { Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { global } from "../../styles/globalStyles";
import { UserContext } from "../../contexts/UserContext";
import React, { useContext, useEffect, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";

// Components
import ProfileModal from "../../components/ProfileModal";
import FriendsModal from "../../components/ProfileComponents/FriendsModal";
import UploadProfilePic from "../../components/UploadProfilePic";
import About from "../../components/About";

const Profile = () => {
  const id = uuid.v4();
  const { user, setUser } = useContext(UserContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [friendsModalVisible, setFriendsModalVisible] = useState(false);
  useEffect(() => {}, [user]);

  // No permissions request is necessary for launching the image library
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    if (result.cancelled) return;
    try {
      const { data } = await API.post(
        "addProfilePicture",
        { base64: result.base64, id },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (data === "saved") {
        setUser({
          info: {
            ...user.info,
            pictureURL: `/Images/ProfilePictures/${user.info.email + id}.png`,
          },
          token: user.token,
        });
      }
    } catch (err) {
      Alert.alert("Network error !");
    }
  };

  const changeProfilePic = () => {
    Alert.alert("Profile Picture", "Change Profile Picture ?", [
      {
        text: "Cancel",
        onPress: () => {
          return;
        },
      },
      { text: "Yes", onPress: pickImage },
    ]);
  };

  return (
    <ScrollView style={global.ScrollView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ProfileModal
          user={user}
          setUser={setUser}
          setModalVisible={setModalVisible}
        />
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={friendsModalVisible}
        onRequestClose={() => {
          setModalVisible(!friendsModalVisible);
        }}
      >
        <FriendsModal
          user={user}
          setUser={setUser}
          setFriendsModalVisible={setFriendsModalVisible}
        />
      </Modal>

      <View style={global.profileHeader}>
        {user.info.pictureURL ? (
          <TouchableOpacity onPress={changeProfilePic}>
            <Image
              key={id}
              source={{
                uri: `http://192.168.1.3:4000/` + user.info.pictureURL,
              }}
              style={global.profilePicture}
            />
          </TouchableOpacity>
        ) : (
          <UploadProfilePic pickImage={pickImage} />
        )}
        <View style={global.userInfo}>
          <Text style={global.userName}>{user.info.name}</Text>
          <Text style={global.userEmail}>{user.info.email}</Text>
        </View>
      </View>
      <View style={global.profileSection}>
        <View style={global.editProfile}>
          <Button
            mode="outlined"
            color="tomato"
            onPress={() => setModalVisible(!modalVisible)}
            style={global.about}
          >
            Edit profile
          </Button>
          <Button
            mode="outlined"
            color="tomato"
            onPress={() => setFriendsModalVisible(!friendsModalVisible)}
            style={global.about}
          >
            View Friends
          </Button>
        </View>
        <About user={user} />
      </View>
    </ScrollView>
  );
};

export default Profile;
