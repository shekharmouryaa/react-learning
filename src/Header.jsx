import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
      <nav className="text-center navbar navbar-expand-lg navbar-light bg-light">
        <h1>CRUD OPERATION WITH REDUX </h1>
        <div>
          <Link to='/addemployee' className='mx-4'>Add Employee</Link>
          <Link to='/employees' className='mx-4'>Employees</Link>
        </div>
      </nav>
    </div>
  )
}
