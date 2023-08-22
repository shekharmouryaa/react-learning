import React, { useState } from 'react'
import Card from './Card'

const Main = () => {

  // const myname = ["Shekhar", "Farhan", "Nakul", "Nirmal"]
  
  const [myfavcolor, setmyfavcolor] = useState("#e3c924") //  Default Value

  const [value, setValue] = useState(0) //  Default Value

  console.log("myfavcolor", myfavcolor)


  const add = (a,b) =>{
    let sum = a + b
    setValue(sum)
  }

  const subtract = (a,b) =>{
    let sub = a - b
    setValue(sub)
  }

  function multiply(a,b) {
    let mult = a * b
    setValue(mult)
  }


  // const [show, setShow] = useState(false) // Default Value

  // if(show === true){
  //   alert("value is true")
  // }else{
  //   alert("value is false")
  // }

  //  show ? "valuee is true" : "value is false" ---> ternary operators

  return (
    <div className='row'>
      <h2 style={{ color: myfavcolor }}>Main</h2>
      <h2>{`the addition of numbers a and b is ${value}`}</h2>
      <div className='col'>
      {/* <button onClick={() => setmyfavcolor("#256cc4")} className='btn btn-primary mx-2'>change color to blue</button>
      <button onClick={() => setmyfavcolor("#ed2a2a")} className='btn btn-primary mx-2'>change color to red</button>
      <button onClick={() => setmyfavcolor("#37cd23")} className='btn btn-primary mx-2'>change color to green</button>
      <button onClick={() => setmyfavcolor("#000000")} className='btn btn-primary mx-2'>change color to black</button> */}
        

      <button onClick={() => add(25,15)} className='btn btn-primary mx-2'>ADD</button>
      <button onClick={() => subtract(25,15)} className='btn btn-primary mx-2'>SUBTRACT</button>
      <button onClick={() => multiply(25,15)} className='btn btn-primary mx-2'>MULTIPLY</button>
      </div>

    </div>
  )
}

export default Main