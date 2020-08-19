import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles/CardStyles';

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = { currentImage: '' };
	}
	render() {
		const { classes } = this.props;
		const { key, image, title, description, creationDate, author, content } = this.props.item;
		return (
			<div key={key} className={classes.Card}>
				<div className={classes.imageContainer} onClick={() => this.props.history.push(`/${key}`)}>
					<img src={image} alt="" />
					<div className={classes.overlay}>
						<p>View More</p>
					</div>
				</div>
				<div className={classes.cardHeaders}>
					<h2>{title}</h2>
					<h3>{description}</h3>
					<span>
						{creationDate} - {author}
					</span>
				</div>
				<div className={classes.postContent}>
					<p>{content}</p>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(withRouter(Card));
