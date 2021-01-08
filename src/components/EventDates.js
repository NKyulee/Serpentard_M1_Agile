
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Paper, Divider, Box } from '@material-ui/core';
 
const useStyles = makeStyles((theme) => ({
 toolbar: theme.mixins.toolbar,
 title: {
 flexGrow: 1,
 backgroundColor: theme.palette.background.default,
 padding: theme.spacing(3),
 textAlign: "center",
 color: "#666",
 fontSize: 40
 },
 h2: {
 fontSize: 40
 },
 content: {
 flexGrow: 1,
 padding: theme.spacing(3),
 backgroundColor: '#1E90FF',
 paddingTop: 20,
 boxSizing: "border-box"
 
 },
 fullWidth: {
 width: '100%'
 },
 picturetext: {
 backgroundColor: 'hsl(50, 0%, 50%)',
 },
 paper: {
 height: 250,
 paddingTop: 0,
 marginRight:39,
 position: "relative",
 left: 500,
 lineHeight: 0.3,
 backgroundColor: "rgba(0, 0, 0, 0.2)"
 },
 txt: {
 fontSize: 13,
 display: "block",
 position: "relative",
 top: 30,
 left: 30,
 color: "#fff"
 
 },
 paperTitle: {
 textTransform: "uppercase",
 position: "relative",
 top: 15,
 textAlign: "center",
 color: "#fff"
 },
 divider : {
 position: "relative",
 width: 300,
 height: 1,
 display: "block",
 top: 50,
 left: 40,
 backgroundColor: "#fff"

 },
 link : {
 display: "block",
 margin: 2,
 padding: 11,
 color: "#000",
 width: 110,
 height: "auto",
 justifyContent: "center",
 alignItems: "flex-start",
 textDecoration: "none",
 border: "none",
 borderRadius: "4px 4px 4px 4px",
 textAlign: "center",
 background: "#D3D3D3",
 transition: "all 0.3s ease-in-out"
 }
}));
function EventDates() {
 const classes = useStyles();
 
 return (
 <div className={classes.content}>
 <Grid container spacing={0}>
 <Grid item xs={4} style={{position:"relative"}}>
 <Paper style={{letterSpacing:1}} className={classes.paper} component="div">
 <Box>
 <p className={classes.paperTitle}> Dans vos agendas</p>
 <p className={classes.txt}>Du 17/01/2021 au 19/01/2021 - De 18h00 à 20h00</p>
 <p className={classes.txt}>30 rue des enfants jouflus, 75017 Paris</p>

 </Box>
 <div className={classes.divider}></div>
 <div style={{position: "relative", top: 130, display: "flex"}}>
 <a id="link" href="#" className={classes.link}>Tag</a>
 <a id="link" href="#" className={classes.link}>Tag</a>
 <a id="link" href="#" className={classes.link}>Tag</a>
 <a id="link" href="#" className={classes.link}>Tag</a>
 <a id="link" href="#" className={classes.link}>Tag</a>
 </div>
 </Paper>
 </Grid>
 </Grid>
 </div>
 );
}
export default EventDates;