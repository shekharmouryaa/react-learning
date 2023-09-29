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
    const [isEdit , setIsEdit] = useState(false)
    const [selectedUserId , setSelectedUserId] = useState("")


    const baseUrl = "http://localhost:5000"
    // const baseUrl = "https://mern-admin-backend-jxw3.onrender.com"
  
    const getAllUsers = () =>{
        fetch(`${baseUrl}/general/employees`,{
            method :"GET"
        })
        .then(res => res.json())
        .then(data => setUsers(data.employees))
        .catch(error =>{
            toast.error("Something Went Wrong")
        })
    }

    const deleteUser = (userid) => {
        fetch(`${baseUrl}/general/employee/delete/${userid}`, {
            method :'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            toast.success(data.message)
            let updatedUsers = users.filter(item => item._id !== userid)
            setUsers(updatedUsers)
            // getAllUsers()
            } )
       };

    useEffect(()=>{
        getAllUsers()
    },[])

    const handleChange = (e) =>{
        setForm({...form, [e.target.name] : e.target.value})
    }

    const addNewUser =(e) =>{
        e.preventDefault()
        fetch( `${baseUrl}/general/employee/add`, {
            method :'POST',
            body: JSON.stringify(form),
            headers:{
                'content-type': 'application/json'
            },
        }).then(res => res.json()).then(data =>{
                let updatedUsers = users.concat({...data,...form})
                setUsers(updatedUsers)
                toast.success("User Added Successfully")
                setForm(userForm)
            } ).catch(err => toast.error("Something went wrong"))
       };


       const editUser = (userid) =>{
        let selectedUser = users.filter(item => item._id === userid)
        setForm(selectedUser[0])
        setIsEdit(true)
        setSelectedUserId(userid)
       }

       const updateUser = (e) =>{
        e.preventDefault()
        fetch(`${baseUrl}/general/employee/update/${selectedUserId}`, {
            method :'PUT',
            body: JSON.stringify(form),
            headers:{'content-type': 'application/json'},
        }).then(res => res.json()).then(data =>{
            toast.success("User Updated Successfully")
            setForm(userForm)
            setIsEdit(false)
            let updatedUsers = users.map(val =>{
                if(val._id === selectedUserId){
                    return form 
                }else{
                    return val
                }
            })
            setUsers(updatedUsers)
            } )
       };

    
  return (
    <div>
    <div className='m-4' p-4>
    <div>
            <h3>{isEdit ? "Update User" : "Add New User"}</h3>
            <form onSubmit={isEdit ? updateUser : addNewUser}>
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
                    isEdit ?
                    <button type='submit' className='btn btn-success'>Update</button> :
                    <button type='submit' className='btn btn-outline-primary'>Submit</button>

                   }
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
                        <button className='btn btn-warning ms-2' onClick={()=>editUser(student._id)} >{"Edit"}</button>
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