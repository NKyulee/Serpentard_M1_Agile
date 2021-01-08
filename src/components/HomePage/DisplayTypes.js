import React from 'react';

import { Box, Typography, Popover, Button } from '@material-ui/core';
import { usePopupState, bindHover, bindPopover } from 'material-ui-popup-state/hooks';

import 'leaflet/dist/leaflet.css';

export default function DisplayTypes(props) {
	const popupState = usePopupState({
		variant: 'popover',
		popupId: 1
	});

	const DisplayTypes = [];

	const SubType = (subtype) => (
		<Typography {...bindHover(popupState)} style={{ margin: 10 }}>
			{subtype.name}
		</Typography>
	);

	const Type = (type) => {
		const DisplaySubTypes = [];
		for (let s of type.subTypes) {
			DisplaySubTypes.push(SubType(s));
		}
		return (
			<div>
				<Button variant="contained" {...bindHover(popupState)}>
					{type.name}
				</Button>
				<Popover
					popupId={type.keyType}
					{...bindPopover(popupState)}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'center'
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'center'
					}}
					disableRestoreFocus
				>
					{DisplaySubTypes}
				</Popover>
			</div>
		);
	};
	for (let t of props.types) {
		DisplayTypes.push(Type(t));
	}
	return (
		<Box component="div" style={{ display: 'flex' }}>
			{DisplayTypes}
		</Box>
	);
}
