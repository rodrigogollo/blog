import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Timeline from './Timeline';
import FormPost from './FormPost';
import './App.css';

class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" render={() => <Timeline />} />
				<Route exact path="/new" render={() => <FormPost />} />
				<Route exact path="/:id" render={() => <h1>teste</h1>} />
			</Switch>
		);
	}
}

export default App;
