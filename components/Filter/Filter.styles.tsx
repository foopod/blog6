import { createUseStyles } from 'react-jss'
import { black, white } from '../../constant/colors'

const styles = {
	container: {
		display: 'flex',
		justifyContent: 'right',
		padding: '1rem',
	},
	select: {
		color: black,
		background: white,
		padding: '0.5rem',
		border: 'none',
		margin: '0 0 0 1rem'
	},
}

export default createUseStyles(styles)