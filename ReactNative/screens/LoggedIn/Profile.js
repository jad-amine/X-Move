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
import { UserContext } from "../../contexts/UserContext";
import * as ImagePicker from "expo-image-picker";
import { global } from "../../styles/globalStyles";
import UploadProfilePic from "../../components/UploadProfilePic";
import About from "../../components/About";
import { Button } from "react-native-paper";
import ProfileModal from "../../components/ProfileModal";
import FriendsModal from "../../components/ProfileComponents/FriendsModal";
import uuid from "react-native-uuid";
import API from "../../api";

const Profile = () => {
  const id = uuid.v4();
  const { user, setUser } = useContext(UserContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [friendsModalVisible, setFriendsModalVisible] = useState(false);
  useEffect(() => {}, [user]);

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
