import { createUseStyles } from 'react-jss'
import { headingfontFamily } from '../../constant/jss-vars'

const styles = {
	container: {
		textAlign: 'center',
		cursor: 'pointer',
		position: 'fixed',
		right: '1em',
		bottom: '1em',
		backgroundColor: 'white',
		borderRadius: '50%',
		height: '50px',
		width: '50px',
		padding: '0.8rem 0.5rem 0.2rem 0.5rem',
		boxShadow: '0px 0px 5px gray',
		zIndex: 1000,
		'svg':{
			paddingTop: '8px',
		}
	}
}

export default createUseStyles(styles)
