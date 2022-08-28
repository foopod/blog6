import { createUseStyles } from 'react-jss'
import { black, grey, white } from '../../constant/colors'
import { headingfontFamily } from '../../constant/jss-vars'

const styles = {
    container: {
        textAlign: 'center',
        margin: '4rem 0'
    },
    title:{
        marginTop: '4rem',
        fontSize: '1.5rem',
        fontFamily: headingfontFamily
    },
    input:{
        width: '300px',
        padding: '.7em',
        fontSize: '16px',
        backgroundColor: white,
        border: `${grey} 2px solid`,
        color: '#222',
    },
    submit:{
        width: '150px',
        composes: '$input',
        border: `${black} 2px solid`,
        borderLeft: '0px',
        background: black,
        cursor: 'pointer',
        color: white,
    }
}

export default createUseStyles(styles)