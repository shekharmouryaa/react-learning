import React from "react";
// import Footer from "./Footer";
import { Header } from "./Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import About from "./About";
import Main from "./Main";
import Gallery from "./Gallery";
import Thanks from "./Thanks";

const Home = () => {

    return (
        <>
            <Router>
                <ToastContainer />
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/thankyou" element={<Thanks />} />
                </Routes>
            </Router>
        </>
    )
}

export default Home
