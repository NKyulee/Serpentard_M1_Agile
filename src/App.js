import React from 'react'
import Box from '@material-ui/core/Box'
import SearchAppBar from './components/navbar';
import DateAndTimePickers from './components/datePicker'
import Filters from './components/tagsMenu'
import './App.css';

const TagsList = [
  {keyTag: 0, checked: true, name: "Ados"},
  {keyTag: 1, checked: false, name: "Bibliothèques"},
  {keyTag: 2, checked: false, name: "Cinéma"},
  {keyTag: 3, checked: false, name: "En famille"},
  {keyTag: 4, checked: true, name: "Enfants"},
  {keyTag: 5, checked: false, name: "English"},
  {keyTag: 6, checked: true, name: "Étudiants"},
  {keyTag: 7, checked: true, name: "Expos"},
  {keyTag: 8, checked: false, name: "Geek"},
  {keyTag: 9, checked: false, name: "Gourmand"},
  {keyTag: 10, checked: false, name: "Insolite"},
  {keyTag: 11, checked: true, name: "Les Nuits"},
  {keyTag: 12, checked: false, name: "Musique"},
  {keyTag: 13, checked: false, name: "Noël"},
  {keyTag: 14, checked: true, name: "Plein air"},
  {keyTag: 15, checked: false, name: "Queer Lgbt"},
  {keyTag: 16, checked: false, name: "Solidaire"},
  {keyTag: 17, checked: true, name: "Sport"},
  {keyTag: 18, checked: true, name: "Urbain"},
  {keyTag: 19, checked: true, name: "Végétalisons Paris"}
]

export default class App extends React.Component {

  constructor() {
    super()

    this.state = {
      tagsList: TagsList,
      selectedDate: new Date()
    }

    this.changeTags = this.changeTags.bind(this)
    this.changeDate = this.changeDate.bind(this)
  }

  changeTags(key, status) {
    let tags = this.state.tagsList
    tags.find(t => t.keyTag === key).checked = status
    this.setState({
      tagsList: tags,
      selectedDate: this.state.selectedDate
    });
  }

  changeDate(newDate) {
    this.setState({
      tagsList: this.state.tagsList,
      selectedDate: newDate
    });
  }

  render() {

    const Styles = {

      container: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        padding: "0",
        overflow: "hidden",
      },
      bodyContent : {
        display: "flex",
        flexGrow: "1",
        padding: "0",
        overflow: "hidden"
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
        width: "100%",
      }
    }
    
    return (
      <Box style={Styles.container} component="div">
        <SearchAppBar></SearchAppBar>
        <Box style={Styles.bodyContent}  component="div">
          <Box style={Styles.bodyLeft}  component="div">
            <DateAndTimePickers changeDate={this.changeDate} selectedDate={this.state.selectedDate}></DateAndTimePickers>
            <Filters style={Styles.filters} tags={this.state.tagsList} changeTags={this.changeTags}></Filters>
          </Box>
          <Box style={Styles.bodyRight}  component="div">
            Map
          </Box>
        </Box>
        <Box style={Styles.footerContainer}  component="div">
          footer
        </Box>
      </Box >
    );
  }
}
