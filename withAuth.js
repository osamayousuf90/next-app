import { Suspense, useEffect , useState } from "react";
import Router from "next/router";

function withAuth(WrappedComponent) {

  
    
  return function WithAuth(props) {
    useEffect(() => {
      const authenticated = localStorage.getItem("isLogged");

      if (!authenticated) {
        Router.push("/login");
      } else {
        Router.push("/");
      }
    }, []);

    return (
    <>
    <WrappedComponent {...props} />               
    </>
    );
  };
}

export default withAuth;
