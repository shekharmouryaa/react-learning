import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AddEmployee from './AddEmployee';
import EmployeesList from './EmployeesList';
import { Header } from './Header';
import { ToastContainer } from 'react-toastify';

const MainRoutes = () => {

    return (
        <div>
            <Router>
            <ToastContainer/>
            <Header/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/addemployee" element={<AddEmployee />} />
                    <Route path="/employees" element={<EmployeesList />} />
                </Routes>
            </Router></div>
    )
}

export default MainRoutes