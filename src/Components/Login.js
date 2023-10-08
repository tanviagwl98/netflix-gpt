import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_URL, USER_AVATAR } from "../utils/constants";
import { validateEmailAndPassword } from "../utils/validate";
import {updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const [isSignInFrom, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [errorMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    const message = validateEmailAndPassword(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;

    if(!isSignInFrom){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: USER_AVATAR
          }).then(() => {
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
            // ...
          }).catch((error) => {
              setErrorMessage(error.message)
          });          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + '-' + errorMessage)
      });
    }
  }
  
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInFrom)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="w-screen h-screen object-cover" src={BG_URL} alt="logo" />
      </div>
      <form onSubmit={e=>e.preventDefault()}className="w-full md:w-3/12 p-12 bg-black absolute my-36 mx-auto left-0 right-0 bg-opacity-80 rounded-lg">
      <h1 className="font-bold text-white text-3xl py-4">{isSignInFrom? "Sign In" : "Sign Up"}</h1>
        {!isSignInFrom && <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 text-white"/>}
        <input ref={email} type="text" placeholder="Email Adress" className="p-4 my-4 w-full bg-gray-700 text-white "/>
        <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 text-white"/>
        <p className="text-2xl text-red-500">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInFrom ? "Sign In":"Sign Up"}</button>
        <p className="text-white py-3 cursor-pointer" onClick={toggleSignInForm}>{isSignInFrom ? "New To Netflix? Sign Up!" : "Already A User? Sign In?"}</p>
      </form>
    </div>
  );
};

export default Login;
