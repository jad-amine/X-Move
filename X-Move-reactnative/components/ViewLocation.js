import * as React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Button } from "react-native-paper";
import { global } from "../styles/globalStyles";

export default function ViewLocation({ setLocation, location, setShowMap }) {
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: parseFloat(34.197327989805275),
          longitude: parseFloat(35.84649175852537),
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
        style={styles.map}
        onPress={(e) => setLocation(e.nativeEvent.coordinate)}
      >
        {location && <Marker coordinate={location} />}
      </MapView>
      <Button
        style={{ position: "absolute", bottom: 20, padding: 10 }}
        icon="pin"
        mode="contained"
        onPress={() =>
          setShowMap((prev) => {
            !prev;
          })
        }
        disabled={!location}
        color="red"
      >
        <Text style={global.addLocation}>Add location</Text>
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
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
