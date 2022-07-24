import * as React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Modal } from "react-native";
import { UserContext } from "../../contexts/UserContext";
import MapModal from "../../components/MapModal";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

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
        const response = await fetch(
          `http://10.0.2.2:4000/api/users/getLocations/${
            search[0] ? "players" : "properties"
          }/${search[1]}`,
          {
            headers: {
              authorization: `Bearer ${user.token}`,
            },
          }
        );
        const data = await response.json();
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
    <View style={styles.container}>
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
        style={styles.map}
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
        style={{ width: 300, position: "absolute", top: 15 }}
        mode="contained"
      >
        Search
      </Button>
      <Text
        style={{
          width: 300,
          position: "absolute",
          top: 60,
          color: "red",
          textAlign: "center",
        }}
      >
        {resultMessage}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    flex: 0.999,
    marginBottom: 45,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
