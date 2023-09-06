import React, { useState } from 'react'
import { toast } from 'react-toastify'
import BasicModal from './Modal';
// import Button from '@mui/material/Button';
// import { TextField } from '@mui/material';
// import Switch from '@mui/material/Switch';

export const StudentData = () => {
    // const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const [isEdit , setEdit] = useState(false)
    const [email , selectedEmail] = useState("")
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // To get local storage data
    const localStudnetEntries = JSON.parse(localStorage.getItem("student-entries")) ?? []

    
    // STEP - 1 (Set name and value in input field)
    const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phoneNumber: "" })
    const [studentDetail, setStudentDetail] = useState(localStudnetEntries)
    
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    // ...form means spread operators // copy of old data

    // STEP -3  (submit form value)

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log("form", form);
        let updatedData = studentDetail.concat(form)
        setStudentDetail(updatedData) // to store data in local state
        localStorage.setItem("student-entries", JSON.stringify(updatedData)) // TO store Data in localStorage
        setForm({ firstName: "", lastName: "", email: "", phoneNumber: "" }) // Form reset
        toast.success("Student Details Added Successfully")
        handleClose()
    } 

    // DELTE ITEMS
    const deleteItem = (email) =>{
        let updatedEntries = studentDetail.filter(student => student.email !== email )
        setStudentDetail(updatedEntries)
        localStorage.setItem("student-entries", JSON.stringify(updatedEntries))
        toast.success("Student Details deleted Successfully")
    }
    
    // STEP - 1 for Edit
    const editItem = (email) =>{
        let selectedEntry = studentDetail.filter(student => student.email === email )
        setForm(selectedEntry[0])
        setEdit(true)
        selectedEmail(email)
    }

    // STEP -2 update entries
    const handleUpdate =(e) =>{
        e.preventDefault()
        let updatedData = studentDetail.map(student => {
            if(student.email === email){
                return form
            }else{
                return student
            }
        })
        setStudentDetail(updatedData) // to store data in local state
        localStorage.setItem("student-entries", JSON.stringify(updatedData)) // TO store Data in localStorage
        resetForm()
        toast.success("Student Details Updated Successfully")
    }

    const resetForm =()=>{
        setForm({ firstName: "", lastName: "", email: "", phoneNumber: "" }) // Form reset
        setEdit(false)
    }

    return (
        <div className='ms-4'>
            
            {/* <Button variant="contained">Contained</Button>
      <Button className='mx-3' variant="outlined">Outlined</Button> */}

      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" /> */}

          {/* <Switch {...label} defaultChecked /> */}
          <BasicModal 
          isEdit={isEdit}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleUpdate={handleUpdate}
          form={form}
          resetForm={resetForm}
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
           />
            
            <div className='mt-3'>
                <h3>Student Details</h3>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { studentDetail.map((student,index) => 
                        <tr>
                        <td>{index+1}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.email}</td>
                        <td>{student.phoneNumber}</td>
                        <td>
                            <button className='btn btn-danger' onClick={()=>deleteItem(student.email)}>{"Delete"}</button>
                            <button className='btn btn-warning ms-2' onClick={()=>editItem(student.email)}>{"Edit"}</button>
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
