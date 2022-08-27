import { black, grey } from "./colors";

export const globalPostStyles = {
    'img':{
      margin: 'auto',
      display: 'block',
      width: '70%',
      imageRendering: 'pixelated',
      padding: '1rem',
      background: black
    },
    'pre':{
      background: grey,
      width: '100%',
      fontFamily: 'monospace',
      overflow: 'auto',
      padding: '2rem',
      marginLeft: '-2rem',
    },
    'code':{
      background: grey,
    },
    'a':{
      color: black
    },
    'iframe':{
      width: '100%'
    }
  }