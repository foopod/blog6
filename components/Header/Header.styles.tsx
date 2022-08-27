import { createUseStyles } from 'react-jss'
import { black } from '../../constant/colors'

const styles = {
    title: {
        fontSize: '3rem',
        margin: '3rem 0 1rem 0',
        textAlign: 'center',
        color: black,
    },
    link:{
        textDecoration: 'none',
    }
}

export default createUseStyles(styles)