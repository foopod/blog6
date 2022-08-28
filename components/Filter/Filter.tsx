import useStyles from './Filter.styles'

interface Props{
    optionList : string[]
    onSelect : (tag? :string) => void
}

const Filter: React.FC<Props> = ({optionList, onSelect}) => {
	const classes = useStyles()

	const onChange = () => {
		const tag = (document.getElementById('tagFilter') as HTMLSelectElement).selectedOptions[0].value
		if(tag === 'all'){
			onSelect()
		} else {
			onSelect(tag)
		}
	}
    
	return  (
		<div className={classes.container}>
			<p>Filter by</p>
			<select onChange={onChange} id='tagFilter' className={classes.select}>
				<option>all</option>
				{optionList.map((option) => {
					return <option key={option}>{option}</option>
				})}
			</select>
		</div>
	)
}

export default Filter