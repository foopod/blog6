import { ReactNode } from 'react'
import Header from '../Header/Header'
import useStyles from './Page.styles'

interface Props {
	children: ReactNode
}

const Page = ({ children }: Props) => {
	const classes = useStyles()

	return (
		<>
			<Header />
			<div className={classes.container}>{children}</div>
		</>
	)
}

export default Page
