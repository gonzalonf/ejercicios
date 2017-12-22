import React, { Component } from 'react';

// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Router, Route } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';

import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import Todo from './components/Todo';
import Footer from './components/Footer';
import TicTacToe from './components/TicTacToe';

const history = createBrowserHistory({});


class App extends Component {
	constructor() {
		super();
		this.state = {
			title: 'Este es el Header'
		};
	}
	render() {
		setTimeout(()=>this.setState({ title: 'Ahora, este es el nuevo Header' }),3000);
		return (
				<Router history={history}>
					<div>
						<Header title={this.state.title} />

						<Route exact path="/" component={Home} />
						<Route exact path="/todo" component={Todo} />
						<Route exact path="/tic" render={TicTacToe} />

						<Footer />
					</div>
				</Router>
		);
	}
}

export default App;
