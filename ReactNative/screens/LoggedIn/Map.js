import * as React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default function Map() {
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
        onPress={(e) => console.log(e.nativeEvent)}
      >
        <Marker
          coordinate={{
            latitude: 34.197327989805275,
            longitude: 35.84649175852537,
          }}
        />
      </MapView>
      {/* add component to choose sport */}
      {/* <Text style={{ position: "absolute", top: 50, left: 50 }}>hii</Text> */}
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
