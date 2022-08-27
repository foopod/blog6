import App from 'next/app'

export default class MyApp extends App {
  componentDidMount () {
    const style = document.getElementById('server-side-styles') as HTMLElement

    if (style?.parentNode) {
      style.parentNode.removeChild(style)
    }
  }
}