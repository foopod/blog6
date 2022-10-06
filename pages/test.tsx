import { useEffect, useState } from 'react'

export default function Test() {
	const [title, setTitle] = useState<string | null>(null)
	const [list, setList] = useState<string[] | null>(null)

	useEffect(() => {
		const getTitle = async () => {
			const response = await fetch(
				'https://wins-allowlist.aocollab.tech/allowlist.json'
			)
			const json = await response.json()
			setTitle(json.title)
			setList(json.allowlist)
		}
		getTitle()
	}, [])

	return (
		<>
			{' '}
			{title ? <h1>{title}</h1> : <h1>Nada</h1>}
			{list && (
				<ul>
					{list.map((item) => (
						<li>{item}</li>
					))}
				</ul>
			)}
		</>
	)
}
