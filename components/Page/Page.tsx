import { ReactNode } from 'react'
import Header from '../Header/Header'
import useStyles from './Page.styles'
import ScrollToTop from '../Widgets/ScrollToTop'

interface Props {
	children: ReactNode
}

const Page = ({ children }: Props) => {
	const classes = useStyles()

	return (
		<>
			<Header />
			<ScrollToTop />
			<div className={classes.container}>{children}</div>
		</>
	)
}

export default Page
