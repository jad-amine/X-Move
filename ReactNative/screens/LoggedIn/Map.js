import * as React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: parseFloat(34.197327989805275),
          longitude: parseFloat(35.84649175852537),
          latitudeDelta: parseFloat(34.197327989805275),
          longitudeDelta: parseFloat(35.84649175852537),
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 90,
    marginBottom: 282,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
