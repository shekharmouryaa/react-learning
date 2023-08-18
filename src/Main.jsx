import React from 'react'
import Card from './Card'

const Main = () => {

  const myname  = ["Shekhar", "Farhan","Nakul", "Nirmal","Nilesh"]
   
  return (
      <div className='row'>
        <h2>Main</h2>
        {myname.map( username =>
        <div className='col-md-3'>
        <Card username={username}/>
        </div>
        )}
    </div>
  )
}

export default Main