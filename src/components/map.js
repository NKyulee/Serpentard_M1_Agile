import React from "react";
import { Marker, Popup, TileLayer, MapContainer } from "react-leaflet";

import "../index.css";

export default function DisplayMap() {
  return (
    <MapContainer center={[48.866667, 2.333333]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}
