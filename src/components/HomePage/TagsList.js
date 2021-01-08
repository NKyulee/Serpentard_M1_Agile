import React from 'react';

import { Card, CardContent, Typography, Checkbox, Box, Grid } from '@material-ui/core';

export default function TagsList(props) {
	const Styles = {
		tagsContainer: {
			overflow: 'auto',
			flexGrow: '1',
			padding: '0 10px'
		},
		tags: {
			margin: '10px'
		}
	};

	const DisplayTags = [];

	const Tag = (tag) => (
		<Card key={tag.keyTag} style={Styles.tags}>
			<CardContent>
				<Grid container display="flex" justify="space-between" alignItems="center">
					<Typography component="h2">{tag.name}</Typography>
					<Checkbox
						color="primary"
						checked={tag.checked}
						onChange={(event) => props.changeTags(tag.keyTag, event.target.checked)}
						inputProps={{ 'aria-label': 'secondary checkbox' }}
					/>
				</Grid>
			</CardContent>
		</Card>
	);

	for (let t of props.tags) {
		DisplayTags.push(Tag(t));
	}

	return (
		<Box component="div" style={Styles.tagsContainer}>
			{DisplayTags}
		</Box>
	);
}
