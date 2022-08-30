import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import useStyles from './Header.styles'

const Header: React.FC = () => {
	const classes = useStyles()
	const router = useRouter()

	return (
		<a className={classes.link} href={'/'}>
			<h1 className={classes.title}>Jono Shields</h1>
		</a>
	)
}

export default Header
