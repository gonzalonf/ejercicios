import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
// import { poner, acá, imports } from 'react-router';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'gonza',
			surn: 'fernandez'
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.setState({ surn: e.target.value });
	}
	handleClick() {
		const newName = this.state.name === 'cátulo' ? 'gonza' : 'cátulo';
		this.setState({ name: newName });
	}

	render() {
		return (
			<div className="App">
				<Header name={this.state.name} onClick={this.handleClick} />
				<Header name={this.state.surn} onChange={this.handleChange} />
			</div>
		);
	}
}

ReactDOM.render(<App />,document.getElementById('root'));