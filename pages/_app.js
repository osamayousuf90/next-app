import "../styles/app.scss";
import { useEffect , useState } from "react";

function MyApp({ Component, pageProps }) {
  
  return (
    <Component {...pageProps} />
  )
}
export default MyApp;
