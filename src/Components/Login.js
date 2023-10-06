import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";
import { validateEmailAndPassword } from "../utils/validate";

const Login = () => {
  const [isSignInFrom, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState();
  const handleButtonClick = () => {
    const message = validateEmailAndPassword(email.current.value, password.current.value);
    setErrorMessage(message);
  }
  
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInFrom)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="logo" />
      </div>
      <form onSubmit={e=>e.preventDefault()}className="w-3/12 p-12 bg-black absolute my-36 mx-auto left-0 right-0 bg-opacity-80 rounded-lg">
      <h1 className="font-bold text-white text-3xl py-4">{isSignInFrom? "Sign In" : "Sign Up"}</h1>
        {!isSignInFrom && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 text-white"/>}
        <input ref={email} type="text" placeholder="Email Adress" className="p-4 my-4 w-full bg-gray-700 text-white"/>
        <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 text-white"/>
        <p className="text-2xl text-red-500">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInFrom ? "Sign In":"Sign Up"}</button>
        <p className="text-white py-3 cursor-pointer" onClick={toggleSignInForm}>{isSignInFrom ? "New To Netflix? Sign Up!" : "Already A User? Sign In?"}</p>
      </form>
    </div>
  );
};

export default Login;
