import React, { Component } from 'react';
import Card from './Card';
import data from './data';
import FixedNavbar from './FixedNavbar';
import { withStyles } from '@material-ui/styles';

const styles = {
	container: {
		height: '100vh',
		width: '50vw',
		margin: '0 auto'
	}
};

class Timeline extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.container}>
				<FixedNavbar />
				<ul>{data.map((item) => <Card key={item.key} item={item} />)}</ul>
			</div>
		);
	}
}

export default withStyles(styles)(Timeline);
