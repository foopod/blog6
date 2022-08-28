import { createUseStyles } from 'react-jss'
import { black, white } from '../../constant/colors'

const styles = {
	container: {
		width: '100%',
		display: 'flex',
		alignItems: 'left',
		boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
		background: white,
		transition: 'transform .2s',
		'&:hover':{
			boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
			transform: 'scale(1.1)'
		},
		margin: '2rem 0', 
		position: 'relative',
		flexDirection: 'column',
		'@media (min-width: 768px)': {
			flexDirection: 'row',
			alignItems: 'center',
		},
	},
	image: {
		height: '250px',
		width: '100%',
		objectFit: 'cover',
		backgroundColor: 'black',
		'@media (min-width: 768px)': {
			minWidth: '300px',
			maxWidth: '300px',
		},
	},
	textContainer:{
		padding: '0.5rem 1rem',
		marginBottom: '2rem',
		'@media (min-width: 768px)': {
			marginBottom: '0rem'
		},
	},
	title:{
		margin: '0',
		padding: '0',
	},
	date: {
		margin: '0',
	},
	tag:{
		color: '#888'
	},
	readTime:{
		color: white,
		position: 'absolute',
		right : '0',
		bottom: '0',
		textDecoration : 'none',
		background: black,
		padding : '0.5rem 1rem'
	},
	link: {
		textDecoration : 'none',
		color: 'black'
	}
}

export default createUseStyles(styles)