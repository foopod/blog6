import { useEffect } from 'react'
import useStyles from './Comments.styles'

export default function Comments() {
	const classes = useStyles()

	function componentDidMount() {
		const script = document.getElementById('comments')
		script?.setAttribute('crossorigin', 'anonymous')
		script?.setAttribute('async', 'true')
		script?.setAttribute('repo', 'foopod/blog6')
		script?.setAttribute('issue-term', 'pathname')
		script?.setAttribute('theme', 'boxy-light')
		script?.setAttribute('src', 'https://utteranc.es/client.js')
	}

	useEffect(() => {
		componentDidMount()
	}, [])

	return <script id="comments" className={classes['@global']} />
}
