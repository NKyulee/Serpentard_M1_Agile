import React from "react";
import Box from '@material-ui/core/Box'
import { Marker, Popup, TileLayer, MapContainer } from "react-leaflet";
import { Icon } from "leaflet";

import "../index.css";

const positions = [
  { id: 1, latlong: [47.216667, -1.550000], popupText: "Nantes" },
  { id: 2, latlong: [48.9582708, 2.8773541], popupText: "Meaux" },
  { id: 3, latlong: [50.6365654, 3.0635282], popupText: "Lille" },
  { id: 4, latlong: [47.4782, 5.76504], popupText: "Igny" },
  { id: 5, latlong: [48.8566969, 2.3514616], popupText: "Paris" },
  { id: 6, latlong: [43.7009358, 7.2683912], popupText: "Nice" },
]


export const Nbre = positions.length

export default function DisplayMap(props) {

  const mark = new Icon({
    iconUrl: "https://i.ibb.co/bW8DFDx/pin.png",
    iconSize: [50, 70 ]
  });


  const listPos = props.position.map((position) =>
    <Marker icon={mark} position={position.fields.lat_lon} riseOnHover={true}>
      <Popup>
        Hello {position.fields.title}
      </Popup>
    </Marker>
  );

  const Styles = {

  }

  return (
    <Box>
      <MapContainer center={[48.866667, 2.333333]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {listPos}
      </MapContainer>
    </Box>
  );
}
