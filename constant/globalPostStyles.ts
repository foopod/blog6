import { black, darkGrey, white } from './colors'

export const globalPostStyles = {
	img: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		background: black,
		'@media (min-width: 768px)': {
			maxWidth: '70%',
		},
	},
	a: {
		color: black,
	},
	'iframe, video, table': {
		maxWidth: '100%',
	},
	table: {
		borderCollapse: 'collapse',
	},
	'td,th': {
		border: '1px black solid',
		padding: '0.2rem',
		textAlign: 'center',
	},
	blockQuote:{
		borderLeft: '3px gray solid',
		paddingLeft: '5px'
	},
	'.pixelated': {
		imageRendering: 'pixelated',
		width: '70%',
	},
	code:{
		wordWrap: 'break-word',
		backgroundColor: '#282a36',
		color: 'white',
		padding: '2px 8px',
		margin: '0 2px',
		borderRadius: '5px',
	},
	pre:{
		'& code':{
			padding: '0 !important',
			fontSize: '16px',
		}
	},
}
