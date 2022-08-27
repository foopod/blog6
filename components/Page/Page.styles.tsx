import { createUseStyles } from 'react-jss'
import { grey } from '../../constant/colors'
import { headingfontFamily, standardPageWidth } from '../../constant/jss-vars'

const styles = {
    container: {
        margin: 'auto',
        padding : '1rem',
        maxWidth: standardPageWidth,
    }
}

export default createUseStyles(styles)