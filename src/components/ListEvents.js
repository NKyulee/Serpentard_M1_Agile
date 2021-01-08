import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	title: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(3)
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	}
}));

function ListEvents() {
	const classes = useStyles();

	return (
		
		<div style={{ maxHeight: '60vh' }}>
			<div className={classes.title}>
				<Typography variant="h6">Event Information </Typography>
			</div>
			<div className={classes.content}>
				<Box overflow="scroll" style={{ maxHeight: '25vh' }}>
					<Typography paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus, velit quis gravida
						sollicitudin, mi odio egestas metus, in egestas mauris justo sit amet arcu. Aenean id urna sed
						lacus venenatis hendrerit. Proin dignissim vehicula leo, ac feugiat diam venenatis eu. Maecenas
						tortor mi, mollis quis nulla vel, dictum pulvinar dui. Morbi commodo orci eu convallis
						ullamcorper. Curabitur ut nisl ac risus varius pretium et vitae neque. Donec pulvinar posuere
						dignissim. Quisque in congue sapien. Nunc vehicula ut ipsum a vestibulum. Vestibulum mollis ac
						eros vel suscipit. Sed eget pharetra nunc, vitae laoreet justo. Ut iaculis, nunc sed auctor
						efficitur, dolor velit pretium urna, sit amet sollicitudin ante arcu id velit. Nam nisi urna,
						semper nec feugiat id, ultricies quis mauris. Phasellus fringilla cursus ante et dignissim. Sed
						imperdiet vestibulum eros et interdum. Nulla malesuada nunc tellus, vitae rhoncus magna
						convallis pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus,
						velit quis gravida sollicitudin, mi odio egestas metus, in egestas mauris justo sit amet arcu.
						Aenean id urna sed lacus venenatis hendrerit. Proin dignissim vehicula leo, ac feugiat diam
						venenatis eu. Maecenas tortor mi, mollis quis nulla vel, dictum pulvinar dui. Morbi commodo orci
						eu convallis ullamcorper. Curabitur ut nisl ac risus varius pretium et vitae neque. Donec
						pulvinar posuere dignissim. Quisque in congue sapien. Nunc vehicula ut ipsum a vestibulum.
						Vestibulum mollis ac eros vel suscipit. Sed eget pharetra nunc, vitae laoreet justo. Ut iaculis,
						nunc sed auctor efficitur, dolor velit pretium urna, sit amet sollicitudin ante arcu id velit.
						Nam nisi urna, semper nec feugiat id, ultricies quis mauris. Phasellus fringilla cursus ante et
						dignissim. Sed imperdiet vestibulum eros et interdum. Nulla malesuada nunc tellus, vitae rhoncus
						magna convallis pretium. Sed eget pharetra nunc, vitae laoreet justo. Ut iaculis, nunc sed
						auctor efficitur, dolor velit pretium urna, sit amet sollicitudin ante arcu id velit. Nam nisi
						urna, semper nec feugiat id, ultricies quis mauris. Phasellus fringilla cursus ante et
						dignissim. Sed imperdiet vestibulum eros et interdum. Nulla malesuada nunc tellus, vitae rhoncus
						magna convallis pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
						dapibus, velit quis gravida sollicitudin, mi odio egestas metus, in egestas mauris justo sit
						amet arcu. Aenean id urna sed lacus venenatis hendrerit. Proin dignissim vehicula leo, ac
						feugiat diam venenatis eu. Maecenas tortor mi, mollis quis nulla vel, dictum pulvinar dui. Morbi
						commodo orci eu convallis ullamcorper. Curabitur ut nisl ac risus varius pretium et vitae neque.
						Donec pulvinar posuere dignissim. Quisque in congue sapien. Nunc vehicula ut ipsum a vestibulum.
						Vestibulum mollis ac eros vel suscipit. Sed eget pharetra nunc, vitae laoreet justo. Ut iaculis,
						nunc sed auctor efficitur, dolor velit pretium urna, sit amet sollicitudin ante arcu id velit.
						Nam nisi urna, semper nec feugiat id, ultricies quis mauris. Phasellus fringilla cursus ante et
						dignissim. Sed imperdiet vestibulum eros et interdum. Nulla malesuada nunc tellus, vitae rhoncus
						magna convallis pretium. Sed eget pharetra nunc, vitae laoreet justo. Ut iaculis, nunc sed
						auctor efficitur, dolor velit pretium urna, sit amet sollicitudin ante arcu id velit. Nam nisi
						urna, semper nec feugiat id, ultricies quis mauris. Phasellus fringilla cursus ante et
						dignissim. Sed imperdiet vestibulum eros et interdum. Nulla malesuada nunc tellus, vitae rhoncus
						magna convallis pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
						dapibus, velit quis gravida sollicitudin, mi odio egestas metus, in egestas mauris justo sit
						amet arcu. Aenean id urna sed lacus venenatis hendrerit. Proin dignissim vehicula leo, ac
						feugiat diam venenatis eu. Maecenas tortor mi, mollis quis nulla vel, dictum pulvinar dui. Morbi
						commodo orci eu convallis ullamcorper. Curabitur ut nisl ac risus varius pretium et vitae neque.
						Donec pulvinar posuere dignissim. Quisque in congue sapien. Nunc vehicula ut ipsum a vestibulum.
						Vestibulum mollis ac eros vel suscipit. Sed eget pharetra nunc, vitae laoreet justo. Ut iaculis,
						nunc sed auctor efficitur, dolor velit pretium urna, sit amet sollicitudin ante arcu id velit.
						Nam nisi urna, semper nec feugiat id, ultricies quis mauris. Phasellus fringilla cursus ante et
						dignissim. Sed imperdiet vestibulum eros et interdum. Nulla malesuada nunc tellus, vitae rhoncus
						magna convallis pretium.
					</Typography>
				</Box>
			</div>
		</div>
	);
}

export default ListEvents;
