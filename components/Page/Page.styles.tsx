import { createUseStyles } from 'react-jss'
import { grey } from '../../constant/colors'
import {
	headingfontFamily,
	standardFontFamily,
	standardPageWidth,
} from '../../constant/jss-vars'

const styles = {
	'@font-face': [
		{
			fontFamily: 'Montserrat',
			src: 'url(/fonts/Montserrat-Bold.ttf) format(truetype)',
		},
		{
			fontFamily: 'FiraSans',
			src: 'url(/fonts/FiraSans-Regular.ttf) format(truetype)',
		},
	],
	'@global': {
		'html, body': {
			padding: 0,
			margin: 0,
			fontFamily: standardFontFamily,
			background: grey,
			color: '#1d1f21',
			fontWeight: '400',
			fontSize: '18px',
			lineHeight: '1.725',
			textRendering: 'geometricPrecision',
		},
		'h1,h2,h3,h4,h5,h6': {
			fontFamily: headingfontFamily,
		},
	},
	container: {
		margin: 'auto',
		padding: '0rem',
		maxWidth: standardPageWidth,
		'@media (min-width: 768px)': {
			padding: '1rem',
		},
	},
}

export default createUseStyles(styles)
