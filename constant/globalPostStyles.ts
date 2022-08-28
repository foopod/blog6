import { black, darkGrey, white } from './colors'

export const globalPostStyles = {
	img: {
		margin: 'auto',
		display: 'block',
		width: '100%',
		imageRendering: 'pixelated',
		background: black,
		'@media (min-width: 768px)': {
			width: '70%',
		},
	},
	pre: {
		background: darkGrey,
		width: '100%',
		fontFamily: 'monospace',
		overflow: 'auto',
		padding: '10px 20px',
		marginLeft: '-20px',
	},
	code: {
		background: darkGrey,
		color: white,
		fontSize: '0.8rem',
	},
	a: {
		color: black,
	},
	'iframe, video, table': {
		width: '100%',
	},
	table: {
		borderCollapse: 'collapse',
	},
	'td,th': {
		border: '1px black solid',
		padding: '0.2rem',
		textAlign: 'center',
	},
}
