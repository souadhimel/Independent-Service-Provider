import React from 'react';
import "./Login.css";
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import {useAuthState , useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import SignOut from '../SignOut/SignOut';
import auth from '../../../Firebase/firebase.init';
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Login = () => {
    const [user]=useAuthState(auth);
    const [email,setEmail]=useState(" ")
    const [password,setPassword]=useState(" ")
    const[error,setError]=useState(" ")
    const navigate = useNavigate()
    const location=useLocation()
    const  from = location.state?.from?.pathname || "/";
   
// log in with email and password
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur=(e) => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur=(e) => {
        setPassword(e.target.value)
    }
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from,{replace: true})
    }
 if (error) {
    error = <p className='text-danger'>Error: {error?.message}</p>
    }
    const handleUserSignIn=(e) => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }

    // Password reset
    const resetPassword = async () => {
        const email = setEmail.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }
// google sign in
    const [signInWithGoogle] = useSignInWithGoogle(auth);




    return (
        <div className="form_container">
            <div>
                <h2 className="form_title">Login</h2>
                <form onSubmit={handleUserSignIn} >
                <div className="input_group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                </div>
                <div className="input_group">
                <label htmlFor="password">Password</label>
                <input onBlur={handlePasswordBlur} type="password" name="password" id=""  required/>
                </div>
                <p style={{ color :"red" }}>{error?.message}</p>
                <div >
                    <input className="form_submit" type="submit" value="Login" />
                </div>
                </form>
                <div className="form_text">
                <p>New to Tour De Vacation? <Link className="form_link" to="/register">Create a new account</Link></p>
                <p>Forget Password? <button className=' text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
                
                </div>

                <div className="divider">
            <div className="divider_line"></div><p>or</p>
            <div className="divider_line"></div>
            </div>
                <div >
                    {
                        user? <SignOut></SignOut>:
                        <button onClick={()=>signInWithGoogle()} className="form_submit_google" ><FcGoogle></FcGoogle>  Continue with Google</button>
                        
                    }
                   
                </div>
                
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;