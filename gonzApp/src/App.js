import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import Content from './components/Content';
import Footer from './components/Footer';
import Other from './components/Other'

const history = createBrowserHistory();

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
						<Route exact path="/content" component={Content} />
						<Route exact path="/other-content" component={Other} />
						<Route exact path="/another" render={()=> <h3>Yet Another content</h3>} />

						<Footer />
					</div>
				</Router>
		);
	}
}

export default App;
