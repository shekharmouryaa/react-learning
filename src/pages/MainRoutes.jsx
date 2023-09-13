import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from '../HomePage'
import ProductPage from '../ProductPage'
import { Header } from '../Header'

const MainRoutes = () => {
  return (
    <div>
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/allproducts' element={<ProductPage/>} />
            </Routes>
        </Router>
    </div>
  )
}

export default MainRoutes