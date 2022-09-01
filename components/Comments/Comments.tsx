import React, { useEffect, useRef } from 'react'

const Comments: React.FC = () => {
	const elementRef = useRef<HTMLDivElement>(null)

	// first load
	useEffect(() => {
		if (!elementRef.current) {
			return
		}

		const scriptElem = document.createElement('script')
		scriptElem.src = 'https://giscus.app/client.js'
		scriptElem.async = true
		scriptElem.crossOrigin = 'anonymous'
		scriptElem.setAttribute('data-repo', 'foopod/blog6')
		scriptElem.setAttribute('data-repo-id', 'R_kgDOH4_ywA')
		scriptElem.setAttribute('data-category', 'General')
		scriptElem.setAttribute('data-category-id', 'DIC_kwDOH4_ywM4CRKZd')
		scriptElem.setAttribute('data-mapping', 'foopod')
		scriptElem.setAttribute('data-strict', '1')
		scriptElem.setAttribute('data-reactions-enabled', '1')
		scriptElem.setAttribute('data-emit-metadata', '0')
		scriptElem.setAttribute('data-input-position', 'bottom')
		scriptElem.setAttribute(
			'data-theme',
			'https://jonoshields.com/theme/style.css'
		)
		scriptElem.setAttribute('data-lang', 'en')

		elementRef.current.appendChild(scriptElem)
	}, [])

	return <section ref={elementRef} />
}

export default Comments
