import React, { Component } from 'react';

export default class SearchBar extends Component {
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

	// override the default browser behaviour to automatically submit form element upon clicking button or hitting enter key
	handleFormSubmit(event) {
		event.preventDefault();
	}

	render() {
		return (
			<form
				className="input-group"
				onSubmit={this.handleFormSubmit}>
					<input
						placeholder="Enter city name"
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