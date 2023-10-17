import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addEmployeeAction, updateEmployeeAction } from './redux/actions'
import { useNavigate } from 'react-router-dom'

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
    const {selectedEmail, employees}  = useSelector(state => state.employeeReducer)

    const navigate = useNavigate()
    // const params = useParams()
    // console.log("params",params)


    // Function call every time when useEffect dependency update
    useEffect(() =>{
        if(selectedEmail){
            let employee = employees.filter(item =>{
                    return item.email === selectedEmail
            })
            setForm(employee[0])
        }else{
            setForm(userForm)
        }       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[selectedEmail,employees])

    const handleChange = (e) =>{
        setForm({...form, [e.target.name] : e.target.value})
    }

    const addNewUser =(e) =>{
        e.preventDefault()
        console.log(form);
        dispatch(addEmployeeAction(form))
        setForm(userForm)
     };
     const updateEmployee = () =>{
        let updatedUsers = employees.map(item =>{
            if(item.email === selectedEmail){
                return form
            }else{
                return item
            }
        })
        dispatch(updateEmployeeAction(updatedUsers))
        setForm(userForm)
        navigate("/employees")
     }


  return (
    <div>
        <div>
            <h3 class="mx-3">{selectedEmail ? "Update Employee": "Add New Employee"}</h3>
            <form onSubmit={selectedEmail ? updateEmployee : addNewUser}>
                <div class="mx-3 form-row row" style={{ width: "300px" }}>
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
                    <button type='submit' className='btn btn-outline-primary'>{selectedEmail ? "Update": "Submit"}</button>

                   }
                </div>
            </form>
    </div>
        </div>
  )
}

export default AddEmployee