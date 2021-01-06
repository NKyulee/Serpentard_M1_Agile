import React from 'react';
import { Card, CardContent, Typography, Checkbox, Box } from '@material-ui/core';

export default function Filters(props) {
	const Styles = {
		tagsContainer: {
			overflow: 'auto',
			flexGrow: '1',
			padding: '0 20px'
		},
		tags: {
			marginBottom: '20px'
		}
	};

	const DisplayTags = [];

	const Tag = (tag) => (
		<Card key={tag.keyTag} style={Styles.tags}>
			<CardContent>
				<Typography component="h2">{tag.name}</Typography>
				<Checkbox
					color="primary"
					checked={tag.checked}
					onChange={(event) => props.changeTags(tag.keyTag, event.target.checked)}
					inputProps={{ 'aria-label': 'secondary checkbox' }}
				/>
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
