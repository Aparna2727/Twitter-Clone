import React from 'react'
import {GrTwitter} from 'react-icons/gr'
import {FcGoogle} from 'react-icons/fc'
// import { TextField } from '@mui/material/TextField';
function SignUp() {
  return (
    <>
    <div class>
        <div><GrTwitter color='royalblue' size={50}/></div>
        <h1>Sign in to Twitter</h1>
        <button><FcGoogle size={30}/>Sign up</button>
        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
    </div>
    </>
  )
}

export default SignUp