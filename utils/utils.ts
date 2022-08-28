export const pad = (number: number) => {
	return number <= 99 ? `0${number}`.slice(-2) : number
}
  
export const toShortFormat = (date : Date) => {
	const monthNames =['Jan','Feb','Mar','Apr',
		'May','Jun','Jul','Aug',
		'Sep', 'Oct','Nov','Dec']
	const day = pad(date.getDate())
	const monthIndex = date.getMonth()
	const monthName = monthNames[monthIndex]
	const year = date.getFullYear()
    
	return `${day} ${monthName} ${year}` 
}