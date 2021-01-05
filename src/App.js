import React from 'react'
import Box from '@material-ui/core/Box'
import SearchAppBar from './components/navbar';
import DateAndTimePickers from './components/datePicker'
import Filters from './components/tagsMenu'
import DisplayMap from './components/map'
import NestedList from './components/typesBar'
import './App.css';

const TagsList = [
  { keyTag: 0, checked: true, name: "Ados" },
  { keyTag: 1, checked: false, name: "Bibliothèques" },
  { keyTag: 2, checked: false, name: "Cinéma" },
  { keyTag: 3, checked: false, name: "En famille" },
  { keyTag: 4, checked: true, name: "Enfants" },
  { keyTag: 5, checked: false, name: "English" },
  { keyTag: 6, checked: true, name: "Étudiants" },
  { keyTag: 7, checked: true, name: "Expos" },
  { keyTag: 8, checked: false, name: "Geek" },
  { keyTag: 9, checked: false, name: "Gourmand" },
  { keyTag: 10, checked: false, name: "Insolite" },
  { keyTag: 11, checked: true, name: "Les Nuits" },
  { keyTag: 12, checked: false, name: "Musique" },
  { keyTag: 13, checked: false, name: "Noël" },
  { keyTag: 14, checked: true, name: "Plein air" },
  { keyTag: 15, checked: false, name: "Queer Lgbt" },
  { keyTag: 16, checked: false, name: "Solidaire" },
  { keyTag: 17, checked: true, name: "Sport" },
  { keyTag: 18, checked: true, name: "Urbain" },
  { keyTag: 19, checked: true, name: "Végétalisons Paris" }
]

const TypesList = [
  {
    keyType: 0, selected: true, name: "Animations",
    subTypes: [
      { keySubType: 0, selected: false, name: "Atelier/Cours" },
      { keySubType: 1, selected: false, name: "Autre animation" },
      { keySubType: 2, selected: false, name: "Balade" },
      { keySubType: 3, selected: false, name: "Conférence/Débat" },
      { keySubType: 4, selected: false, name: "Lecture/Rencontre" },
      { keySubType: 5, selected: false, name: "Loisirs/jeux" },
      { keySubType: 6, selected: false, name: "Stage" },
      { keySubType: 7, selected: false, name: "Visite guidée" },
    ]
  },
  {
    keyType: 1, selected: false, name: "Concerts",
    subTypes: [
      { keySubType: 0, selected: false, name: "Autre concert" },
      { keySubType: 1, selected: false, name: "Chanson française" },
      { keySubType: 2, selected: false, name: "Classique" },
      { keySubType: 3, selected: false, name: "Folk" },
      { keySubType: 4, selected: false, name: "Hip-Hop" },
      { keySubType: 5, selected: false, name: "Jazz" },
      { keySubType: 6, selected: false, name: "Musiques du monde" },
      { keySubType: 7, selected: false, name: "Pop/Variété" },
      { keySubType: 8, selected: false, name: "Rock" },
      { keySubType: 9, selected: false, name: "Electronique" },
    ]
  },
  {
    keyType: 2, selected: false, name: "Evénements",
    subTypes: [
      { keySubType: 0, selected: false, name: "Autre événement" },
      { keySubType: 1, selected: false, name: "Brocante/Marché" },
      { keySubType: 2, selected: false, name: "Festival/Cycle" },
      { keySubType: 3, selected: false, name: "Fête/Parade" },
      { keySubType: 4, selected: false, name: "Salon" },
      { keySubType: 5, selected: false, name: "Soirée/Bal" },
    ]
  },
  {
    keyType: 3, selected: false, name: "Expositions",
    subTypes: [
      { keySubType: 0, selected: false, name: "Art contemporain" },
      { keySubType: 1, selected: false, name: "Autre expo" },
      { keySubType: 2, selected: false, name: "Beaux-Arts" },
      { keySubType: 3, selected: false, name: "Design/Mode" },
      { keySubType: 4, selected: false, name: "Histoire/Civilisations" },
      { keySubType: 5, selected: false, name: "Illustrations/BD" },
      { keySubType: 6, selected: false, name: "Photographie" },
      { keySubType: 7, selected: false, name: "Sciences/Techniques" },
      { keySubType: 8, selected: false, name: "Street-art" },
    ]
  },
  {
    keyType: 4, selected: true, name: "Spectacles",
    subTypes: [
      { keySubType: 0, selected: false, name: "Autre spectacle" },
      { keySubType: 1, selected: false, name: "Cirque/Art de la Rue" },
      { keySubType: 2, selected: false, name: "Danse" },
      { keySubType: 3, selected: false, name: "Humour" },
      { keySubType: 4, selected: false, name: "Jeune public" },
      { keySubType: 5, selected: false, name: "Opéra/Musical" },
      { keySubType: 6, selected: false, name: "Projection" },
      { keySubType: 7, selected: false, name: "Théâtre" },
    ]
  },
]


export default class App extends React.Component {

  constructor() {
    super()

    this.state = {
      tagsList: TagsList,
      typesList: TypesList,
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
      bodyContent: {
        display: "flex",
        flexGrow: "1",
        padding: "0",
        overflow: "hidden"
      },
      bodyLeft: {
        width: "20%",
        backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
      },
      bodyRight: {
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
        <Box style={Styles.bodyContent} component="div">
          <Box style={Styles.bodyLeft} component="div">
            <DateAndTimePickers changeDate={this.changeDate} selectedDate={this.state.selectedDate}></DateAndTimePickers>
            <Filters style={Styles.filters} tags={this.state.tagsList} changeTags={this.changeTags}></Filters>
          </Box>
          <Box style={Styles.bodyRight} component="div">
            <Box>
              <NestedList types={this.state.typesList} ></NestedList>
            </Box>
            <Box></Box>
          </Box>
        </Box>
        <Box style={Styles.footerContainer} component="div">
          footer
        </Box>
      </Box >
    );
  }
}
