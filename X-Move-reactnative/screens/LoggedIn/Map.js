// Utilities
import API from "../../api";
import * as React from "react";
import { Button } from "react-native-paper";
import { global } from "../../styles/globalStyles";
import MapView, { Marker } from "react-native-maps";
import { UserContext } from "../../contexts/UserContext";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Modal, Dimensions, Alert } from "react-native";

// Components
import MapModal from "../../components/MapModal";

export default function Map() {
  const navigation = useNavigation();
  const { user } = React.useContext(UserContext);
  const [players, setPlayers] = React.useState(null);
  const [resultMessage, setResultMessage] = React.useState("");
  const [search, setSearch] = React.useState([true, "allPlayers"]);
  const [modalVisible, setModalVisible] = React.useState(false);

  // Get all subscribed players locations on when the component mount
  React.useEffect(() => {
    const fetchLocations = async () => {
      try {
        const { data } = await API.get(
          `getLocations/${search[0] ? "players" : "properties"}/${search[1]}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        !data.length
          ? setResultMessage("No results found!!")
          : setResultMessage(``);
        setPlayers(data);
      } catch (err) {
        Alert.alert("Network erro !");
        setResultMessage("No results found!!");
      }
    };
    fetchLocations();
  }, [search]);

  return (
    <View style={global.mapContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <MapModal setModalVisible={setModalVisible} setSearch={setSearch} />
      </Modal>
      <MapView
        initialRegion={{
          latitude: 34.197327989805275,
          longitude: 35.84649175852537,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
        style={{
          ...global.map,
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
        onPress={(e) => console.log(e.nativeEvent)}
      >
        {players &&
          players.map(
            (player) =>
              player.location && (
                <Marker
                  onCalloutPress={() =>
                    navigation.navigate("StackNavigator", {
                      screen: "PlayerProfile",
                      params: { ...player },
                    })
                  }
                  key={player._id}
                  title={player.name}
                  description={player.email}
                  coordinate={player.location}
                />
              )
          )}
      </MapView>
      <Button
        onPress={() => setModalVisible(true)}
        style={global.mapSearch}
        mode="contained"
      >
        Search
      </Button>
      <Text style={global.mapError}>{resultMessage}</Text>
    </View>
  );
}
