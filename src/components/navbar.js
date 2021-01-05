import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1,
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block'
		}
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto'
		}
	},
	searchIcon: {
		height: '100%',
		position: 'relative',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputRoot: {
		color: 'inherit'
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(7)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '30ch',
			'&:focus': {
				width: '50ch'
			}
		}
	}
}));

export default function SearchAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography className={classes.title} variant="h6" noWrap>
						Event in Paris
					</Typography>
					<div className={classes.searchIcon}>
						<SearchIcon />
					</div>
					<div>
						<form>
							<TextField
								placeholder="Search an event.."
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput
								}}
								id="outlined"
							/>
							<Button variant="contained" type="submit" value="Submit">
								Search
							</Button>
						</form>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}
