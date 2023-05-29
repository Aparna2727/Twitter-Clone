import React from 'react'
import { Link } from 'react-router-dom'

export default function signUp() {
  return (
    <div>
        <h1>Join Twitter today</h1>
        <div>
            <button>Sign Up with Google</button>
        </div>
        <div>
            <button>Sign Up with Apple</button>
        </div>
        <span>or</span>
        <div>
            <button>Create account</button>
        </div>
        <div>
            <p>By signing up, you agree to the <Link>Terms of Service</Link><br/>and <Link>Privacy Policy</Link>, including <Link>Cookie Use</Link>.</p>
        </div>
        <br/><br/><br/>
        <div>
            <p>Have an account already?<Link>Log in</Link></p>
        </div>

    </div>
  )
}
