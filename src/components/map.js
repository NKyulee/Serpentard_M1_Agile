import React from "react";
import { Marker, Popup, TileLayer } from "react-leaflet";
import { Map } from "leaflet";

import "../index.css";

export default function DisplayMap() {
  return (
    <Map center={[45.4, -75.7]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  );
}
