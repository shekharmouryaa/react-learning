import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEmployeeAction } from './redux/actions'

const AddEmployee = () => {
    
    const userForm = {
        "name" : "",
        "email":"",
        "password": "",
        "city": "",
        "occupation": "",
        "phoneNumber": ""
    }
    
    const [form , setForm] = useState(userForm)
    const dispatch = useDispatch()

    const handleChange = (e) =>{
        setForm({...form, [e.target.name] : e.target.value})
    }

    const addNewUser =(e) =>{
        e.preventDefault()
        console.log(form);
        dispatch(addEmployeeAction(form))
        setForm(userForm)
     };


  return (
    <div>
        Add New Employee
        <div>
            <h3>{"Add New User"}</h3>
            <form onSubmit={ addNewUser}>
                <div class="form-row row" style={{ width: "300px" }}>
                    <div class="col-md-12 my-3 ">
                        <input type="text" name={"name"} value={form.name} class="form-control" 
                        onChange={handleChange} placeholder="Full Name" />
                    </div>
                    <div class="col-md-12 my-3">
                        <input type="email" name={"email"} value={form.email} class="form-control" 
                        onChange={handleChange} placeholder="Email" />
                    </div>
                    <div class="col-md-12 my-3">
                        <input type="number" name={"phoneNumber"} value={form.phoneNumber} class="form-control" 
                        onChange={handleChange} placeholder="Mobile" />
                    </div>
                    <div class="col-md-12 my-3">
                        <input type="password" name={"password"} value={form.password} class="form-control" 
                        onChange={handleChange} placeholder="Password" />
                    </div>
                    <div class="col-md-12 my-3">
                        
                        <input type="radio" id="indore" name={"city"} value={"indore"}  className='m-2 p-2'
                        onChange={handleChange} placeholder="City" />
                        <label htmlFor='indore'> INDORE </label>
                        
                        <input type="radio" id="chennai" name={"city"} value={"Chennai"} className='m-2 p-2'
                        onChange={handleChange} placeholder="City" />
                        <label htmlFor='chennai'> CHENNAI </label>
                    </div>
                    <div class="col-md-12 my-3">
                        <select name="occupation" id="occ" value={form.occupation} 
                        onChange={handleChange} className='form-control'>
                            <option value="">Please select</option>
                            <option value="react developer">React Developer</option>
                            <option value="node develope">Node Developer</option>
                            <option value="ui developer">UI Developer</option>
                            <option value="ux">UX Designer</option>
                        </select>
                    </div>
                   {
                    <button type='submit' className='btn btn-outline-primary'>Submit</button>

                   }
                </div>
            </form>
    </div>
        </div>
  )
}

export default AddEmployee