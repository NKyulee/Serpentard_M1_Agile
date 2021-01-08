import React, { Component } from 'react';

import { Box, Typography } from '@material-ui/core';

import axios from 'axios';

import DateAndTimePickers from '../layout/DateAndTimePickers';
import DisplayTypes from './DisplayTypes';
import DisplayMap from './DisplayMap';
import TagsList from './TagsList';

import { TypesList } from '../../assets/TypesList';

export class HomePage extends Component {
	constructor() {
		super();

		this.state = {
			tagsList: [],
			typesList: TypesList,
			events: [],
			nhits: 0,
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
					return newTagsList
				});
				this.setState({
					tagsList: newTagsList
				});
			})
			.catch((error) => console.log(error));
	}

	async searchEventByTags(tagsSelected) {
		//recuperation des evenements par tags
		var params = new URLSearchParams();
		tagsSelected.map((tags) => {
			if (tags.checked === true) params.append('refine.tags', tags.name);
			return tags
		});

		await axios
			.get('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=1&rows=1000&refine.address_city=Paris', {
				headers: {
					'Content-Type': 'application/json'
				},
				params: params
			})
			.then((response) => {
				this.setState({ nhits: response.data.nhits })
				var temp_res = []
				response.data.records.forEach(element => {
					if (element.fields.lat_lon) {
						temp_res.push(element)
					} else {
						this.setState({ nhits: this.state.nhits - 1 })
					}
				})
				this.setState({ events: temp_res });
			})
			.catch((error) => {
				console.log(error)

			})
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
				overflow: 'auto'
			},
			bodyLeft: {
				paddingTop: '10px',
				backgroundColor: 'lightgrey',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center'
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
				backgroundColor: 'darkgrey',
				padding: '5px',
				textAlign: 'center'
			}
		};
		return (
			<Box style={Styles.bodyContent} component="div">
				<Box style={Styles.bodyLeft} component="div">
					<Typography variant="h5">Filter By</Typography>
					<DateAndTimePickers
						style={{ backgroundColor: 'lightgrey' }}
						changeDate={this.changeDate}
						selectedDate={this.state.selectedDate}
					/>
					<Typography>Select tags</Typography>
					<TagsList style={Styles.filters} tags={this.state.tagsList} changeTags={this.changeTags} />
				</Box>
				<Box style={Styles.bodyRight} component="div">
					<Box component="div">
						<DisplayTypes types={this.state.typesList} />
					</Box>
					<Box component="div">
						<DisplayMap position={this.state.events} />
					</Box><
						Box>
						<Typography style={Styles.resultBar}>
							{this.state.nhits} résultats correspondent à votre recherche.
						</Typography>
					</Box>
				</Box>
			</Box>
		);
	}
}

export default HomePage;
