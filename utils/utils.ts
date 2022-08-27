export const pad = (number: number) => {
    return number <= 99 ? `0${number}`.slice(-2) : number
  }
  
export const toShortFormat = (date : Date) => {
    let monthNames =["Jan","Feb","Mar","Apr",
                      "May","Jun","Jul","Aug",
                      "Sep", "Oct","Nov","Dec"]
    let day = pad(date.getDate())
    let monthIndex = date.getMonth()
    let monthName = monthNames[monthIndex]
    let year = date.getFullYear()
    
    return `${day} ${monthName} ${year}` 
  }