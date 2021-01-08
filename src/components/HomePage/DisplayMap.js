import React from 'react';
import 'leaflet/dist/leaflet.css';
import Box from '@material-ui/core/Box';
import { Marker, Popup, TileLayer, MapContainer } from 'react-leaflet';
import { Icon } from 'leaflet';

import '../../index.css';

export default function DisplayMap(props) {

	const mark = new Icon({
		iconUrl: 'https://i.ibb.co/bW8DFDx/pin.png',
		iconSize: [50, 70]
	});



	const listPos = props.position.map((position) => {
		if (position.fields.nhits === 0) {
			console.log("HHFGFGFG")}
			return (
				<Marker icon={mark} position={position.fields.lat_lon} riseOnHover={true}>
					<Popup>Hello</Popup>
				</Marker>
			)
		
	});
	return (
		<Box>
			<MapContainer style={{ height: '70vh' }} center={[48.866667, 2.333333]} zoom={12}>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
				/>
				{listPos}
			</MapContainer>
		</Box>
	);
}

