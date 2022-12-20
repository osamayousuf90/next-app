import React from 'react'
import { useRouter } from 'next/router'



const Login = () => {
  const router = useRouter();
  
  //  handle login
  const handleLogin = () => {
    router.push("/")
    localStorage.setItem("isLogged", true)
    // window.location.reload(true) 
  }

  return (
    <div>
        <div className="login">
        <div className="login_inner">
          <h2>Login</h2> 
          <div className="login_inputs">
          <input type="text" placeholder='Email' />
          <input type="pwd" placeholder='Password' />
          <button onClick={ handleLogin } >Login</button>  
          </div>
        </div>
        </div>      
    </div>
  )
}

export default Login