import React, { Component } from 'react';
import FixedNavbar from './FixedNavbar';
import { withStyles } from '@material-ui/styles';

const styles = {
	container: {
		height: '100vh',
		width: '50vw',
		margin: '0 auto'
	}
};

class FormPost extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.container}>
				<FixedNavbar />
				<h1>Create New Post</h1>
			</div>
		);
	}
}
export default withStyles(styles)(FormPost);
