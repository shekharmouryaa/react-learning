import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { editEmployeeAction } from './redux/actions'

export const Header = () => {
  const dispatch = useDispatch()

  const updateReducer = ()=>{
    dispatch(editEmployeeAction(""))
  }
  return (
    <div>
      <nav className="text-center navbar navbar-expand-lg navbar-light bg-light">
        <h1>CRUD OPERATION WITH REDUX </h1>
      </nav>
      <div>
          <Link to='/addemployee' className='mx-4' onClick={updateReducer}>Add Employee</Link>
          <Link to='/employees' className='mx-4'>Employees</Link>
        </div>
    </div>
  )
}
