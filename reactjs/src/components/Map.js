import React, { useContext, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { UserContext } from "../contexts/UserContext";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function Map({ setLocation }) {
  const { user } = useContext(UserContext);
  const [propertyLocation, setPropertyLocation] = useState(
    user.info.property?.location
  );
  const LocationFinderDummy = () => {
    useMapEvents({
      click(e) {
        setLocation(e.latlng);
        setPropertyLocation(e.latlng);
      },
    });
    return null;
  };

  return (
    <MapContainer
      className="map-container"
      center={[34.24961, 35.665626]}
      zoom={12}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationFinderDummy />
      {propertyLocation && (
        <Marker position={propertyLocation}>
          <Popup>{user.info.property.name} Location</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
