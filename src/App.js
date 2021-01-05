import React from 'react'
import Container from '@material-ui/core/Container'
import SearchAppBar from './components/navbar';
import DateAndTimePickers from './components/datePicker'
import Filters from './components/tagsMenu'
import './App.css';

export default class App extends React.Component {


  render() {

    const Styles = {

      container: {
        display: "flex",
        flexDirection: "column",
        maxHeight: "100vh",
        padding: "0",
        overflow: "hidden",
      },
      bodyContent : {
        display: "flex",
        flexGrow: "1",
        padding: "0",
        height: "600px",
      }, 
      bodyLeft : {
        width: "20%",
        backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
      },
      bodyRight : {
        flexGrow: "1",
        backgroundColor: "blue",
      },
      filters: {
        height: "100%",
        overflow: "auto",
        overflowY: "scroll",
        flexGrow: "1",
      },
      footerContainer: {
        backgroundColor: "green",
        height: "100px",
        width: "100%",

      }
    }
    return (
      <Container style={Styles.container}>
        <SearchAppBar></SearchAppBar>
        <Container style={Styles.bodyContent}>
          <Container style={Styles.bodyLeft}>
            <DateAndTimePickers></DateAndTimePickers>
            <Filters style={Styles.filters}></Filters>
          </Container>
          <Container style={Styles.bodyRight}>
            Map
          </Container>
        </Container>
        <Footer style={Styles.footerContainer}/>
      </Container >
    );
  }
}

