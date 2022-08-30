import { createUseStyles } from 'react-jss'
import { black } from '../../constant/colors'

const styles = {
	title: {
		fontSize: '2.5rem',
		margin: '2rem 0 2rem 0',
		textAlign: 'center',
		color: black,
	},
	link: {
		textDecoration: 'none',
	},
}

export default createUseStyles(styles)
