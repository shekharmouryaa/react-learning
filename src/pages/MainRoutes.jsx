import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from '../HomePage'
import ProductPage from '../ProductPage'
import { Header } from '../Header'
import AddProducts from '../AddProducts'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const MainRoutes = () => {
  return (
    <div>
        <Router>
           <ToastContainer/>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/allproducts' element={<ProductPage/>} />
                <Route path='/addproduct' element={<AddProducts/>} />
            </Routes>
        </Router>
    </div>
  )
}

export default MainRoutes