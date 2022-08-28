import { createUseStyles } from 'react-jss'
import { white } from '../../constant/colors'
import { globalPostStyles } from '../../constant/globalPostStyles'

const styles = {
  '@global': globalPostStyles,
  container: {
    background: white,
    padding: '2rem',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    marginBottom: '2rem'
  },
  title: {
     fontSize: '2.5rem',
     margin: '0rem 0'
  },
  date: {
    margin: '0',
  },
  tag:{
      color: '#888'
  },
}

export default createUseStyles(styles)