import React, { useState } from 'react'

export default function CreateAccount() {
     const [form , setform ] = useState({
        name:'',
        phone :'',
        email: '',
        dob:''
     })

     const changehandler = (e) => {
        setform({...form , [e.target.name] :e.target.value})
        console.log(form)
     }

     const handlesubmit = (e) => {
      e.preventDefault()
      if(!form.name || !form.email || !form.phone || !form.dob ){
        alert ('Please fill the all Info ')
      }
      else {
           alert ("You Have  Succesfully Completed Account  ")
      }

     }


  return (
    <>
     <div>Create Your account</div>
    <form action="" onSubmit={handlesubmit}>
       <label> <input type="text" placeholder='Name' name ='name' value={form.name} onChange={changehandler}/></label>
       <br />
       <label> <input type="text" placeholder='Phone'  name ='phone' value={form.phone} onChange={changehandler} /></label>
       <br />
       <label> <input type="email" placeholder='email'  name ='email' value={form.email} onChange={changehandler} /></label>
       <br />
       <label> <input type="date" placeholder='dob' name ='dob' value={form.dob} onChange={changehandler} /></label>
       <br />
       <button>Save</button>
    </form>
    </>
   
  )
}
