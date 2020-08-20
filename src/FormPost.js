import React, { Component } from 'react';
import FixedNavbar from './FixedNavbar';
import { withStyles } from '@material-ui/styles';
import data from "./data"

const styles = {
	container: {
		height: '100vh',
		width: '50vw',
		margin: '0 auto',
		"& h1": {
			fontSize: "3rem",
			textAlign: "center",
			padding: "2rem"
		}
	},
	form: {
		"& label": {
			fontSize: "2rem",
		},
		"& input": {
			display: "block",
			padding: "1rem",
		},
		"& textarea": {
			display: "block",
			width: "100%",
			resize: "none",
			padding: "1rem",
			fontSize: "1.5rem",
			margin: "1rem 0",
		}
	},
	textInput: {
		margin: "1rem 0",
		width: "100%",
	},
	submit: {
		border: "none",
		padding: "1rem",
		background: "black",
		height: "4rem",
		width: "50%",
		margin: "5rem auto",
		color: "white",
		borderRadius: "1.5rem",
		outline: "none",
		"&:hover": {
			color: "black",
			border: "1px solid black",
			background: "white",
		},
	}
};

class FormPost extends Component {
	constructor(props){
		super(props);
		this.state = {
			image: '',
			title: '',
			description: '',
			content: '',
			creationDate: new Date().toLocaleString(),
			author: '',
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event){
		this.setState({[event.target.name]: event.target.value});
	}
	handleSubmit(){
		console.log(data);
	}
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.container}>
				<FixedNavbar />
				<h1>Create New Post</h1>
				<form onSubmit={this.handleSubmit} className={classes.form}>
					<label>Author</label>
					<input className={classes.textInput} type="text" onChange={this.handleChange} value={this.state.author} name="author"></input>
					<label>Title</label>
					<input className={classes.textInput} type="text" onChange={this.handleChange} value={this.state.title} name="title"></input>
					<label>Description</label>
					<input className={classes.textInput} onChange={this.handleChange} value={this.state.description} name="description"></input>
					<label>Content</label>
					<textarea type="text" onChange={this.handleChange} value={this.state.content} name="content" rows="15" maxLength="1250"></textarea>
					<label>Image URL</label>
					<input className={classes.textInput} type="text" onChange={this.handleChange} value={this.state.image} name="image" ></input>
					<button onClick={this.handleSubmit}>teste</button>
					<input className= {classes.submit} type="submit" value="Submit" onSubmit={this.handleSubmit}/>
				</form>
			</div>
		);
	}
}
export default withStyles(styles)(FormPost);
