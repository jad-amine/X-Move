import * as React from "react";
import MapView, { Marker } from "react-native-maps";
import { Text, View, Modal, Dimensions } from "react-native";
import { UserContext } from "../../contexts/UserContext";
import MapModal from "../../components/MapModal";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import API from "../../api";
import { global } from "../../styles/globalStyles";

export default function Map() {
  const [search, setSearch] = React.useState([true, "allPlayers"]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [resultMessage, setResultMessage] = React.useState("");
  const [players, setPlayers] = React.useState(null);
  const { user } = React.useContext(UserContext);
  const navigation = useNavigation();

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
        console.log("Request Error", err);
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
