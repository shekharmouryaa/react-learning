// import moment from 'moment/moment'
// import React, { useEffect, useState } from 'react'
// import { toast } from 'react-toastify'
// import AddEmployee from './AddEmployee'
// import EmployeesList from './EmployeesList'

// const MainContainer = () => {

//     const userForm = {
//         "name" : "",
//         "email":"",
//         "password": "",
//         "city": "",
//         "occupation": "",
//         "phoneNumber": ""
//     }
    
//     const [users , setUsers] = useState([])
//     const [form , setForm] = useState(userForm)
//     const [isEdit , setIsEdit] = useState(false)
//     const [selectedUserId , setSelectedUserId] = useState("")


//     const baseUrl = "http://localhost:5000"
//     // const baseUrl = "https://mern-admin-backend-jxw3.onrender.com"
  
//     // const getAllUsers = () =>{
//     //     fetch(`${baseUrl}/general/employees`,{
//     //         method :"GET"
//     //     })
//     //     .then(res => res.json())
//     //     .then(data => setUsers(data.employees))
//     //     .catch(error =>{
//     //         toast.error("Something Went Wrong")
//     //     })
//     // }



    
//   return (
//         <div>
//             <div className='m-4' p-4>
//                <h1>HOME PAGE</h1>
//             </div>
//       </div>
//   )
// }

// export default MainContainer