import React, { useRef, useState } from 'react';
import Header from './Header';
import { validateData } from '../utils/validate';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase"

const Login = () => {
    const [isSignUpPage, setIsSignUpPage] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);


    const email = useRef(null);
    const password = useRef(null);

    const handleToggleSignUp = () => {
        setIsSignUpPage(!isSignUpPage);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    const handleValidation = () => {
        const validMsg = validateData(email.current.value, password.current.value);
        if (validMsg != null) setErrorMessage(validMsg);
        else {
            if (isSignUpPage) {
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        // Signed up 
                        const user = userCredential.user;
                        setErrorMessage(null);
                        console.log(user);
                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        // console.log(errorCode + " - " + errorMessage);
                        console.log(error);
                        setErrorMessage(errorCode + " - " + errorMessage);
                        // ..
                    });
            }
            else {

            }
        }
      
    }

    return (
        <div className='relative'>
            <Header />
            <img 
                src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg" 
                alt="BackgroundImg" 
                className='w-full h-screen object-cover'
            />
            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                <form className='p-10 bg-black bg-opacity-50' onSubmit={handleSubmit}>
                    <h1 className='font-bold text-2xl text-white mb-4'>
                        {!isSignUpPage ? "SignIn" : "SignUp"}
                    </h1>
                    {isSignUpPage && (
                        <input 
                            type="text" 
                            name="fullname" 
                            id="fullname" 
                            className="bg-gray-600 mb-4 p-2 w-full rounded-lg text-white" // Add text-white to match others
                            placeholder="Fullname" 
                        />
                    )}
                    <input 
                      ref={email}
                        type="email" 
                        name="email" 
                        id="email" 
                        className="bg-gray-600 mb-4 p-2 w-full rounded-lg text-white" 
                        placeholder="Email" 
                    /><br />
                    <input 
                      ref={password}
                        type="password" 
                        name="pwd" 
                        id="pwd" 
                        className="bg-gray-600 w-full mb-4 p-2 rounded-lg text-white" 
                        placeholder="Password" 
                    /><br />
                    {
                      errorMessage != null && <><p className='text-red-600 font-bold'>{"*" + errorMessage}</p><br /></>
                    }
                    <button 
                        type="submit" 
                        className='bg-red-500 text-white p-2 w-full rounded-lg mb-4'
                        onClick={handleValidation}
                    >
                        {!isSignUpPage ? "SignIn" : "SignUp"}
                    </button>
                    <button 
                        type="button" 
                        className='cursor-pointer text-blue-500 w-full' 
                        onClick={handleToggleSignUp}
                    >
                        {!isSignUpPage ? "Already have an account? SignIn now" : "New to Netflix? SignUp now"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;