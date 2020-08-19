import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles/FixedNavbarStyles';

function FixedNavbar(props) {
	const { classes } = props;
	return (
		<nav className={classes.FixedNavbar}>
			<ul>
				<Link to="/" className={classes.textLink}>
					<li>Homepage</li>
				</Link>
				<Link to="/new" className={classes.textLink}>
					<li>Create New Post</li>
				</Link>
			</ul>
		</nav>
	);
}
export default withStyles(styles)(FixedNavbar);
