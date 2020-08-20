import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Timeline from './Timeline';
import FormPost from './FormPost';
import './App.css';
import data from './data';

class App extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(newData) {
		data.push({ key: data.length + 1, ...newData });
		this.props.history.push('/');
	}
	render() {
		return (
			<Switch>
				<Route exact path="/" render={() => <Timeline />} />
				<Route exact path="/new" render={() => <FormPost handleSubmit={this.handleSubmit} />} />
				<Route exact path="/:id" render={() => <h1>teste</h1>} />
			</Switch>
		);
	}
}

export default withRouter(App);
