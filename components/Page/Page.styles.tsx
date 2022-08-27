import { createUseStyles } from 'react-jss'
import { grey } from '../../constant/colors'
import { standardPageWidth } from '../../constant/jss-vars'

const styles = {
    '@font-face': [
        {
            fontFamily: "Montserrat",
            src: 'url(/fonts/Montserrat-Bold.ttf) format(truetype)',
        },{
            fontFamily: "FiraSans",
            src: 'url(/fonts/FiraSans-Regular.ttf) format(truetype)',
        }
    ],
    '@global':{
        'html, body': {
            padding: 0,
            margin: 0,
            fontFamily: 'FiraSans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
            background: grey,
            color: '#1d1f21',
            fontWeight: '400',
            fontSize: '18px',
            lineHeight: '1.725',
            textRendering: 'geometricPrecision',
        },
        'h1,h2,h3,h4,h5,h6': {
            fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
          }
    },
    container: {
        margin: 'auto',
        padding : '1rem',
        maxWidth: standardPageWidth,
    }
}

export default createUseStyles(styles)