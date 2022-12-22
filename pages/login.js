import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";


const Login = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [validationState, setValidationState] = useState(null);

  //  handle login
  const handleLogin = () => {
    router.push("/");
    localStorage.setItem("isLogged", true); 
  };

  function handleChange(event) {
    setInputValue(event.target.value);
    setValidationState(event.target.value === "");
  }



  return (
    <div>
      <div className="login">
        <div className="login_inner">
          <h2>Login</h2>
          <div className="login_inputs">
            <input
              type="text"
              value={inputValue}
              style={{
                backgroundColor: validationState ? validationState === true ? "red" : "green" : validationState === false && "green" ,
              }}
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Email"
            />
            {/* <input type="pwd" value={ password } className={ passwordReq && password ? "required" : "noRequired" } onChange={(e) => setPassword(e?.target?.value) } placeholder='Password' /> */}
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
