import React from 'react'
import './Login.css'
import { BsTwitter } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
export function Login(){
    return(
        <div className='login-container'>

            <span className='icon'><BsTwitter/></span>
            <h1>Sign in to Twitter</h1>
            <button className='google-btn'><FcGoogle/>Sign in with Google</button>
            <button className='apple-btn'><BsApple/>Sign in with Apple</button>
            {/* <br /> */}
            <h3>or</h3>
            <input type="text" placeholder='Phone, email,or username' />
            <button className='next-btn'>Next</button>
            <button className='forgot-btn'>Forgot password?</button>
            <h3>Don't have an account? <a href="">Sign up</a></h3>
        </div>
    )
}