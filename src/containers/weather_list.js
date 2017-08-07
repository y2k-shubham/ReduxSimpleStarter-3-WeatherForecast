// library imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// component imports
import Chart from '../components/chart.js';
import { removeWeather } from '../actions/index.js';;

class WeatherList extends Component {
	constructor(props) {
		super(props);
	}

	handleClick(city) {
		this.props.removeWeather(city);
	}

	renderWeather(cityData) {
		let arrTemp = cityData.list.map(item => item.main.temp);
		let arrHumd = cityData.list.map(item => item.main.humidity);
		let arrPress = cityData.list.map(item => item.main.pressure);

		const name = cityData.city.name;
		return (
			<tr key={name}>
				<td>
					<button onClick={() => this.handleClick(name)}>-</button>
				</td>
				<td>{name}</td>
				<td>
					<Chart data={arrTemp} color='orange' units='K'/>
				</td>
				<td>
					<Chart data={arrPress} color='green' units='hPa'/>
				</td>
				<td>
					<Chart data={arrHumd} color='black' units='%'/>
				</td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Cities</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather, this)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({weather}) {
	return ({weather});
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ removeWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);