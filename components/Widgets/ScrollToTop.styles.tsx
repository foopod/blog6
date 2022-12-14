import { createUseStyles } from 'react-jss'
import { headingfontFamily } from '../../constant/jss-vars'

const styles = {
	container: {
		textAlign: 'center',
		cursor: 'pointer',
	},
	goUp: {
		fontFamily: headingfontFamily,
		fontWeight: 'bold',
		fontSize: '1.2rem',
		padding: '0 1rem',
	},
}

export default createUseStyles(styles)
