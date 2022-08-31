import React, { useEffect, useRef } from 'react'

const Comments: React.FC = () => {
	const elementRef = useRef<HTMLDivElement>(null)

	// first load
	useEffect(() => {
		if (!elementRef.current) {
			return
		}

		const scriptElem = document.createElement('script')
		scriptElem.src = 'https://utteranc.es/client.js'
		scriptElem.async = true
		scriptElem.crossOrigin = 'anonymous'
		scriptElem.setAttribute('repo', 'foopod/blog6')
		scriptElem.setAttribute('issue-term', 'url')
		scriptElem.setAttribute('label', 'blog-comment')
		scriptElem.setAttribute('theme', 'boxy-light')
		elementRef.current.appendChild(scriptElem)
	}, [])

	return <section ref={elementRef} />
}

export default Comments
