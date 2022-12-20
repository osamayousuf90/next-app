import '../styles/app.scss'
import { SessionProvide } from "next-auth/react"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
