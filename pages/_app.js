import "../styles/app.scss";
import { useEffect, useState } from "react";
import { NextShield } from "next-shield";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isAuth, setAuth] = useState(false)
  const [isLoading, setLoading] = useState(true)


  useEffect(() => {
    setTimeout(() => {
    setLoading(false)  
   }, 1000) 
   
  }, [isLoading])

   
  useEffect(() => {
    var logged = localStorage?.getItem("isLogged");
    if (logged) {
      setAuth(true)
    } else {
      setAuth(false)
    }
  }, [isAuth])
  

  return (
    <NextShield
    isAuth={isAuth}
    isLoading={isLoading}
    router={router}
    privateRoutes={['/' , '/contact' , "/about" , '/cardView/[pageNo]' ]}
    publicRoutes={['/login']}
    accessRoute="/"
    loginRoute="/login"
    LoadingComponent={<h1>Loading...</h1>}
     >
    <Component {...pageProps} />
    </NextShield>
  );
}
export default MyApp;
