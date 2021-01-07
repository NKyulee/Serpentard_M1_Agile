import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	title: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(3)
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		backgroundColor: '#1E90FF'
	},
	fullWidth: {
		width: '100%'
	},
	picturetext: {
		backgroundColor: 'hsl(50, 0%, 50%)'
	}
}));
function EventDates() {
	const classes = useStyles();

	return (
		<main className={classes.fullWidth}>
			<div className={classes.toolbar} />
			<div className={classes.picturetext}>
				<div className={classes.title}>
					<Typography variant="h6">Let's pretend it's 1990's internet</Typography>
				</div>
				<div className={classes.content}>
					<Typography paragraph>Du 17/01/2021 au 19/01/2021 - De 18h00 à 20h00</Typography>
					<Typography paragraph>30 rue des enfants jouflus, 75017 Paris</Typography>
					<Typography paragraph />
					<Typography paragraph />
					<Typography paragraph>Tag1 Tag2 Tag3 Tag4</Typography>
				</div>
			</div>
		</main>
	);
}
export default EventDates;
