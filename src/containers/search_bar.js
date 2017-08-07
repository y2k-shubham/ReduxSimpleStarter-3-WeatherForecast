// library imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// manual imports
import { fetchWeather } from '../actions/index.js';

class SearchBar extends Component {
	// to make SearchBar a controlled component, we'll set it's value from component state
	// a controlled component has it's value set by state and not the other way around
	constructor(props) {
		super(props);

		this.state = {
			term: '', 
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		// not required here as we haven't used keyword 'this' inside the handler
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	// update state of this component with the modified value (not the input field's value,
	// which would then trigger a re-render, where the input field's value will then be set equal to the state
	handleInputChange(event) {
		this.setState({
			term: event.target.value,
		});
	}

	handleFormSubmit(event) {
		// override the default browser behaviour to automatically submit form element upon clicking button or hitting enter key
		event.preventDefault();

		this.props.fetchWeather(this.state.term);
		this.setState({
			term: '', 
		});
	}

	render() {
		return (
			<form
				className="input-group"
				onSubmit={this.handleFormSubmit}>
					<input
						placeholder="Enter city name (only Indian cities)"
						className="form-control"
						value={this.state.term}
						onChange={this.handleInputChange}/>
					<span className="input-group-btn">
						<button
							type="submit"
							className="btn btn-secondary">
								Submit
						</button>
					</span>
			</form>
		);
	}
}

// it binds our action-creator fetchWeather to dispath to make sure that all actions created by fetchWeather
// are actually delivered to various reducers
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

// here, instead of passing mapStateToProps as the first argument, we passed null
// this tells react that we don't care about updating the props of this component whenever application state changes
export default connect(null, mapDispatchToProps)(SearchBar);

//  after above two steps, we'll get access to method fetchWeather as this.props.fetchWeather