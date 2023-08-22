import React, { useState } from 'react'

export const RegistrationForm = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(firstName,lastName,email)
        setFirstName("")
        setLastName("")
        setEmail("")
    }

    return (
        <div>
            <h3>RegistrationForm</h3>
            <form onSubmit={handleSubmit}>
                <div class="form-row row" style={{ width: "300px" }}>
                    <div class="col-md-12 my-3 ">
                        <input type="text" value={firstName} class="form-control" 
                        onChange={(event)=>setFirstName(event.target.value)} placeholder="First name" />
                    </div>
                    <div class="col-md-12 my-3">
                        <input type="text"  value={lastName}class="form-control" 
                        onChange={(event)=>setLastName(event.target.value)} placeholder="Last name" />
                    </div>
                    <div class="col-md-12 my-3">
                        <input type="email" value={email} class="form-control" 
                        onChange={(event)=>setEmail(event.target.value)} placeholder="email" />
                    </div>
                    <button type='submit' className='btn btn-outline-primary'>Submit</button>
                </div>
            </form>
        </div>
    )
}
