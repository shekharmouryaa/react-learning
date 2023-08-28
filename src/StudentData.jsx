import React, { useState } from 'react'

export const StudentData = () => {
    
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
    } 

    // DELTE ITEMS
    const deleteItem = (email) =>{
        let updatedEntries = studentDetail.filter(student => student.email !== email )
        setStudentDetail(updatedEntries)
        localStorage.setItem("student-entries", JSON.stringify(updatedEntries))
    }

    return (
        <div className='ms-4'>
            <h3>Student Form</h3>
            <form onSubmit={handleSubmit}>
                <div class="form-row row" style={{ width: "300px" }}>
                    <div class="col-md-12 my-3 ">
                        <input type="text" name={"firstName"} value={form.firstName} class="form-control"
                            onChange={(e) => handleChange(e)} placeholder="First name" />
                    </div>
                    <div class="col-md-12 my-3">
                        <input type="text" name={"lastName"} value={form.lastName} class="form-control"
                            onChange={(e) => handleChange(e)} placeholder="Last name" />
                    </div>
                    <div class="col-md-12 my-3">
                        <input type="email" name={"email"} value={form.email} class="form-control"
                            onChange={(e) => handleChange(e)} placeholder="email" />
                    </div>
                    <div class="col-md-12 my-3">
                        <input type="number" name={"phoneNumber"} value={form.phoneNumber} class="form-control"
                            onChange={(e) => handleChange(e)} placeholder="phone Number" />
                    </div>
                    <button type='submit' className='btn btn-outline-primary'>Submit</button>
                </div>
            </form>
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
                        <td><button className='btn btn-danger' onClick={()=>deleteItem(student.email)}>{"Delete"}</button></td>
                       </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
