import React from "react";
// import Footer from "./Footer";
import { Header } from "./Header";
import Main from "./Main";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () =>{

    return (
        <div>
             <ToastContainer />
            <Header/>
            <Main/>
            {/* <Footer/> */}
        </div>
    )
}

export default Home
