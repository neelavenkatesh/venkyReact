
import React, { useState } from "react";
import "./App.css"

export const MathFunction=()=>{
    const [first,setFirst]=useState(0)
    const [second,setSecond]=useState(0)


 const firstNumber=(event)=>{
    console.log(event.target.value)
    setFirst(event.target.value)
 }
 const secondNumber=(event)=>{
    console.log(event.target.value)
    setSecond(event.target.value)


 }

    return(
        <div>
            <h2 className="mini-head">This is Simple Addition calculator is implemented By Gandra Simhadri</h2>
            <div className="head">
                <input placeholder="enter first number" type="number" onChange={firstNumber}/>
                <h1>+</h1>
                <input  placeholder="enter second number" type="number" onChange={secondNumber}/>
                <h1>=</h1>

                <div className="result">{parseInt(first)+parseInt(second)}</div>
            </div>
        </div>
    )

}