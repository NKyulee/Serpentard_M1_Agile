import React, { Component } from 'react';

import { Box, Typography } from '@material-ui/core';

import axios from 'axios';

import DateAndTimePickers from '../layout/DateAndTimePickers';
import DisplayTypes from './DisplayTypes';
import DisplayMap from './DisplayMap';
import { Nbre } from './DisplayMap';
import TagsList from './TagsList';

import { TypesList } from '../../assets/TypesList';

export class HomePage extends Component {
	constructor() {
		super();

		this.state = {
			tagsList: [],
			typesList: TypesList,
			events: [],
			selectedDate: new Date()
		};

		this.changeTags = this.changeTags.bind(this);
		this.changeDate = this.changeDate.bind(this);
	}

	async componentDidMount() {
		//recuperation des tags
		let newTagsList = [];
		await axios
			.get('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=', {
				headers: {
					'Content-Type': 'application/json'
				},
				params: {
					facet: 'tags'
				}
			})
			.then((response) => {
				response.data.facet_groups[0].facets.map((tags, index) => {
					newTagsList.push({
						keyTag: index,
						checked: false,
						name: tags.name
					});
				});
				this.setState({
					tagsList: newTagsList
				});
				//console.log(this.state.tagsList);
			})
			.catch((error) => console.log(error));
	}

	async searchEventByTags(tagsSelected) {
		//recuperation des evenements par tags
		var params = new URLSearchParams();
		tagsSelected.map((tags) => {
			if (tags.checked === true) params.append('refine.tags', tags.name);
		});
		await axios
			.get('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=', {
				headers: {
					'Content-Type': 'application/json'
				},
				params: params
			})
			.then((response) => {
				this.setState({ events: response.data.records });
				console.log(this.state.events);
			})
			.catch((error) => console.log(error));
	}

	changeTags(key, status) {
		let tags = this.state.tagsList;
		tags.find((t) => t.keyTag === key).checked = status;
		this.setState({
			tagsList: tags,
			selectedDate: this.state.selectedDate
		});
		this.searchEventByTags(this.state.tagsList);
	}

	changeDate(newDate) {
		this.setState({
			tagsList: this.state.tagsList,
			selectedDate: newDate
		});
	}
	render() {
		const Styles = {
			bodyContent: {
				display: 'flex',
				flexGrow: '1',
				padding: '0',
				overflow: 'hidden'
			},
			bodyLeft: {
				width: '20%',
				backgroundColor: 'lightgray',
				display: 'flex',
				flexDirection: 'column'
			},
			bodyRight: {
				flexGrow: '1'
			},
			filters: {
				height: '100%',
				overflow: 'auto',
				overflowY: 'scroll',
				flexGrow: '1'
			},
			resultBar: {
				height: '100%',
				flexGrow: '1',
				backgroundColor: 'white',
				padding: '5px',
				textAlign: 'center'
			}
		};
		return (
			<Box style={Styles.bodyContent} component="div">
				<Box style={Styles.bodyLeft} component="div">
					<DateAndTimePickers changeDate={this.changeDate} selectedDate={this.state.selectedDate} />
					<TagsList style={Styles.filters} tags={this.state.tagsList} changeTags={this.changeTags} />
				</Box>
				<Box style={Styles.bodyRight} component="div">
					<Box component="div">
						<DisplayTypes types={this.state.typesList} />
					</Box>
					<Box>
						<Typography style={Styles.resultBar}>
							{Nbre} résultats correspondent à votre recherche.
						</Typography>
					</Box>
					<Box component="div">
						<DisplayMap position={this.state.events} />
					</Box>
				</Box>
			</Box>
		);
	}
}

export default HomePage;
