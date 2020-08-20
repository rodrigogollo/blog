export default {
	Card: {
		margin: '3rem 0'
	},
	imageContainer: {
		position: 'relative',
		'& img': {
			width: '100%',
			height: '55rem'
		}
	},
	overlay: {
		position: 'absolute',
		backgroundColor: 'white',
		color: 'black',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		height: '55rem',
		width: '100%',
		opacity: 0,
		transition: '.5s ease',
		'&:hover': {
			opacity: 0.7,
			cursor: 'pointer'
		},
		'& p': {
			position: 'absolute',
			opacity: 1,
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			fontSize: '3rem',
			zIndex: '-1'
		}
	},
	cardHeaders: {
		marginTop: '1rem',
		padding: '0',
		'& h2': {
			fontSize: '3.2rem',
			color: 'rgba(0, 0, 0, 0.97)'
		},
		'& h3': {
			fontSize: '2rem',
			fontStyle: 'italic',
			color: 'rgba(0, 0, 0, 0.8)'
		},
		'& span': {
			fontSize: '1.2rem',
			color: 'orange'
		}
	},
	postContent: {
		margin: '1rem 0',
		'& p': {
			fontSize: '2rem',
			textAlign: 'justify',
			wordBreak: 'break-all'
		}
	}
};
