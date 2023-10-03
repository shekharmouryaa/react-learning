import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Login = () => {

    const [form, setForm] = useState({
        email:"",
        password:""
    })
    const baseUrl = "https://mern-admin-backend-jxw3.onrender.com"
  
    const handleChange = (e) =>{
        setForm({...form, [e.target.name] : e.target.value})
    }

    const loginWithApi = (e)=>{
        e.preventDefault()
            fetch( `${baseUrl}/general/employee/login`, {
                method :'POST',
                body: JSON.stringify(form),
                headers:{
                    'content-type': 'application/json'
                },
            }).then(res => res.json()).then(data =>{
               if(data.token){
                localStorage.setItem("token", data.token)
                   setForm({email:"", password:""})
                   toast.success("Login Successfully")
               }else{
                toast.error(data.message)
               }
            } ).catch(err => toast.error("Something went wrong"))

    }
  return (
    <div>
        <h2>Login</h2>
          <form onSubmit={loginWithApi}>
              <div class="form-row row" style={{ width: "300px" }}>
                
                  <div class="col-md-12 my-3">
                      <input type="email" name={"email"} value={form.email} class="form-control"
                          onChange={handleChange} placeholder="Email" />
                  </div>
                  <div class="col-md-12 my-3 ">
                      <input type="text" name={"password"} value={form.password} class="form-control"
                          onChange={handleChange} placeholder="Full Name" />
                  </div>
                  <button type='submit' className='btn btn-outline-primary'>Login</button>
              </div>
          </form>
    </div>
  )
}

export default Login