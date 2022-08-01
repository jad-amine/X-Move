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

const Profile = () => {
  const id = uuid.v4();
  const { user, setUser } = useContext(UserContext);
  // const [changingImage, setChangingImage] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [friendsModalVisible, setFriendsModalVisible] = useState(false);
  useEffect(() => {}, [user]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    // setChangingImage(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    if (result.cancelled) return;
    try {
      const date = new Date();
      const response = await fetch(
        "http://10.0.2.2:4000/api/users/addProfilePicture",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({ base64: result.base64, id }),
        }
      );
      const data = await response.json();
      if (data === "saved") {
        // setChangingImage(false);
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
    <ScrollView style={{ marginBottom: 40 }}>
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
