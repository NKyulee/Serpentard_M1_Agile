import React from 'react';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { Box, Button } from '@material-ui/core';



export default function DisplayTypes(props) {
	console.log(props.types[0])
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
	  setAnchorEl(event.currentTarget);
	};
  
	const handleClose = () => {
	  setAnchorEl(null);
	};

	const DisplayTypesBar = [];

	const SubType = (subtype) => (
		<MenuItem onClick={handleClick} style={{ margin: 10 }}>
			{subtype.name}
		</MenuItem>
	);

	const Type = (type) => {
		const DisplaySubTypes = [];
		for (let s of type.subTypes) {
			DisplaySubTypes.push(SubType(s));
		}
		return (
			<div>
				<Button aria-controls={type.name} aria-haspopup="true" onClick={handleClick} >
					{type.name}
				</Button>
				<Menu
					id={type.name}
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					
					{DisplaySubTypes}
				</Menu>
			</div>
		);
	};
	for (let t of props.types) {
		DisplayTypesBar.push(Type(t));
	}
	return (
		<Box component="div" style={{ display: 'flex' }}>
			{DisplayTypesBar}
		</Box>
	);
}
