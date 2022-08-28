import { createUseStyles } from 'react-jss'
import { white } from '../../constant/colors'
import { globalPostStyles } from '../../constant/globalPostStyles'

const styles = {
	'@global': globalPostStyles,
	container: {
		background: white,
		padding: '1rem',
		boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
		marginBottom: '2rem',
		'@media (min-width: 768px)': {
			padding: '2rem',
		}
	},
	title: {
		fontSize: '2rem',
		margin: '0rem 0'
	},
	date: {
		margin: '0',
	},
	tag:{
		color: '#888'
	},
	buttonContainer: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	link: {
		display: 'flex',
		alignItems: 'center',
		padding: '0 1rem',
		'& svg':{
			padding: '0.5rem'
		}
	},
}

export default createUseStyles(styles)