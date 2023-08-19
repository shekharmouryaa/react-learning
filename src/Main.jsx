import React, { useState } from 'react'
import Card from './Card'

const Main = () => {

  const myname = ["Shekhar", "Farhan", "Nakul", "Nirmal"]

  const [show, setShow] = useState(false) // Default Value
  const [color, setColor] = useState("red") //  Default Value

  // if(show === true){
  //   alert("value is true")
  // }else{
  //   alert("value is false")
  // }

  //  show ? "valuee is true" : "value is false" ---> ternary operators

  console.log("show", show)
  return (
    <div className='row'>
      <h2 style={{ color: color }}>Main</h2>
      <div className='col'>
        <button onClick={() => setColor("green")} className='btn btn-primary'>change color</button>
        <button onClick={() => { setShow(!show) }} className='btn btn-primary mt-2 mx-2'>
          {show ? "Hide cards" : " Show Cards"}</button>
      </div>

      {show ? myname.map((value, index) => {
        if (index == 1 || index == 3) {
          return (<div className='col-md-3'>
            <Card name={value} number={index} />
          </div>)
        } 
      }


      ) : null}


    </div>
  )
}

export default Main