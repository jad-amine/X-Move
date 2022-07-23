import * as React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Modal } from "react-native";
import { UserContext } from "../../contexts/UserContext";
import MapModal from "../../components/MapModal";
import { Button } from "react-native-paper";

export default function Map() {
  const [search, setSearch] = React.useState("players");
  const [modalVisible, setModalVisible] = React.useState(false);
  const { user } = React.useContext(UserContext);

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
        <MapModal setModalVisible={setModalVisible} />
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
        <Marker
          coordinate={{
            latitude: 34.197327989805275,
            longitude: 35.84649175852537,
          }}
        />
      </MapView>
      <Button
        onPress={() => setModalVisible(true)}
        style={{ width: 300, position: "absolute", top: 15 }}
        mode="contained"
      >
        Search
      </Button>
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
