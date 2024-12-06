import React, { useState } from 'react'

function UserofState() {
    const [count ,setCount]=useState(100)
    function increment(){
        setCount(count+4);
    }
    function decrement()
    {
        setCount(count-10);
    }
  return (
    <div>
        <h2>{count}</h2>
        <div>
            <button onClick={increment} >Do incement</button>
            <br />
            <button onClick={decrement} >Do decrement</button>
            <br /><br /><br />
        </div>
    </div>
  )
}

export default UserofState