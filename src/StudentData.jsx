import React, { useState } from 'react'

export const StudentData = () => {

    // STEP - 1 (Set name and value in input field)
    const [form, setForm] = useState({firstName:"", lastName:"", email:"",phoneNumber:""})
  
    // STEP -2 (add in all input in onChange)

    const handleChange =(e)=>{
        setForm({...form, [e.target.name] : e.target.value })
    }

    // ...form means spread operators // copy of old data

    // STEP -3  (submit form value)

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("form", form);
    }

    
    return (
        <div>
            <h3>Student Form</h3>
            <form onSubmit={handleSubmit}>
                <div class="form-row row" style={{ width: "300px" }}>
                    <div class="col-md-12 my-3 ">
                        <input type="text"  name={"firstName"} value={form.firstName} class="form-control" 
                        onChange={(e)=>handleChange(e)} placeholder="First name" />
                    </div>
                    <div class="col-md-12 my-3">
                        <input type="text"  name={"lastName"} value={form.lastName}class="form-control" 
                        onChange={(e)=>handleChange(e)} placeholder="Last name" />
                    </div>
                    <div class="col-md-12 my-3">
                        <input type="email" name={"email"} value={form.email} class="form-control" 
                        onChange={(e)=>handleChange(e)} placeholder="email" />
                    </div>
                    <div class="col-md-12 my-3">
                        <input type="number" name={"phoneNumber"} value={form.phoneNumber} class="form-control" 
                        onChange={(e)=>handleChange(e)} placeholder="phone Number" />
                    </div>
                    <button type='submit' className='btn btn-outline-primary'>Submit</button>
                </div>
            </form>
        </div>
    )
}
