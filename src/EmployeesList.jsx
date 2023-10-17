import moment from 'moment'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteEmployeeAction } from './redux/actions'
import { useNavigate } from 'react-router-dom'

const EmployeesList = () => {
    
const {employees}  = useSelector(state => state.employeeReducer)

const dispatch = useDispatch();
const deleteEmployee =(email) =>{
    dispatch(deleteEmployeeAction(email))
}

const navigate = useNavigate()

const editEmployee =(email) =>{
    navigate(`/editemployee/${email}`)
}
  return (
    <div>
        <h3>Employees List</h3>
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
                        { employees.map((item,index) => 
                        <tr>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phoneNumber}</td>
                        <td>{item.occupation}</td>
                        <td>{item.city}</td>
                        <td>{moment(item.createdAt).format("ll")}</td>
                        <td>
                            <button className='btn btn-danger' onClick={()=>deleteEmployee(item.email)} >{"Delete"}</button>
                        </td>
                        <td>
                        <button className='btn btn-warning ms-2' onClick={()=>editEmployee(item.email)} >{"Edit"}</button>
                        </td>
                       </tr>
                        )
                        }
                    </tbody>
                </table>

    </div>
  )
}

export default EmployeesList