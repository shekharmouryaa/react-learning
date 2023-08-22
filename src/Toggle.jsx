import React, { useState } from 'react'

export const Toggle = () => {

    const [show , setShow] = useState(false)

    // if(show){
    //     console.log("true");
    // }else{
    //     console.log("false");
    // }

  return (
    <div>
        {show ? <h2>{"HELLO"}</h2> : null}

        <button onClick={()=>setShow(!show)} className='btn btn-primary'>
            {show ? "HIDE" :"SHOW"}</button>
    </div>
  )
}