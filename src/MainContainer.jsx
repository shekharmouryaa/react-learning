import moment from 'moment/moment'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const MainContainer = () => {


    const userForm = {
        "name" : "",
        "email":"",
        "password": "",
        "city": "",
        "occupation": "",
        "phoneNumber": ""
    }
    
    const [users , setUsers] = useState([])
    const [form , setForm] = useState(userForm)


    const getAllUsers = () =>{
        fetch('https://mern-admin-backend-jxw3.onrender.com/general/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }

    useEffect(()=>{
        getAllUsers()
    },[])

    const handleChange = (e) =>{
        setForm({...form, [e.target.name] : e.target.value})
    }

    const addNewUser =(e) =>{
        e.preventDefault()
        console.log(form)
        fetch("https://mern-admin-backend-jxw3.onrender.com/general/user/add", {
            method :'POST',
            body: JSON.stringify(form)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            toast.success(data.message)
            let updatedUsers = users.concat(form)
            setUsers(updatedUsers)
            toast.success(data.message)
            setForm(userForm)
            // getAllUsers()
            } )
       };

    
    const deleteUser = (userid) => {
        fetch(`https://mern-admin-backend-jxw3.onrender.com/general/user/delete/${userid}`, {
            method :'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            toast.success(data.message)
            let updatedUsers = users.filter(item => item._id !== userid)
            setUsers(updatedUsers)
            // getAllUsers()
            } )
       };

    
  return (
    <div>
    <div className='m-4' p-4>
    <div>
            <h3>Add New User</h3>
            <form onSubmit={addNewUser}>
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
                        <input type="text" name={"city"} value={form.city} class="form-control" 
                        onChange={handleChange} placeholder="City" />
                    </div>
                    <div class="col-md-12 my-3">
                        <input type="text" name={"occupation"} value={form.occupation} class="form-control" 
                        onChange={handleChange} placeholder="Occupation" />
                    </div>
                    <button type='submit' className='btn btn-outline-primary'>Submit</button>
                </div>
            </form>
        </div>
                <h3>Uers Details</h3>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Occupation</th>
                            <th scope="col">City</th>
                            <th scope="col">Created At</th>
                            <th scope="col">Action</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { users.map((student,index) => 
                        <tr>
                        <td>{index+1}</td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.phoneNumber}</td>
                        <td>{student.occupation}</td>
                        <td>{student.city}</td>
                        <td>{moment(student.createdAt).format("ll")}</td>
                        <td>
                            <button className='btn btn-danger' onClick={()=>deleteUser(student._id)}>{"Delete"}</button>
                        </td>
                        <td>
                        <button className='btn btn-warning ms-2' >{"Edit"}</button>
                        </td>
                       </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
    </div>
    
  )
}

export default MainContainer