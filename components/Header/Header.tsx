import useStyles from './Header.styles'

const Header: React.FC = () => {
	const classes = useStyles()
	return (
		<header>
			<a className={classes.link} href={'/'}>
				<h1 className={classes.title}>Jono Shields</h1>
			</a>
		</header>
	)
}

export default Header
