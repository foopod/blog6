import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { darkGrey } from '../../constant/colors'
import useStyles from './ScrollToTop.styles'

export default function ScrollToTop() {
	const classes = useStyles()

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<div className={classes.container} onClick={scrollToTop}>
			<FontAwesomeIcon icon={faAngleUp} size={'2x'} color={darkGrey}/>
		</div>
	)
}
