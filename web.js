"use client"
import React, { useRef , useState } from 'react'

const page = () => {
    let firstRef = useRef(null);
    let [mode, setmode] = useState(true);
    const [heading, setheading] = useState("PRACTICING ON A BULB!")
    let [btn, setbtn] = useState("ONN");
    const darkMode = ()=>{
        if(mode==true){
            firstRef.current.style.backgroundColor = "yellow";
            console.log(mode);
            setbtn("OFF");
            setmode(false);
            console.log(btn);
        }
        else{
            firstRef.current.style.backgroundColor = "black";
            console.log(mode);
            setbtn("ONN");
            setmode(true);
            console.log(btn);
        }
    }
  return (
    <>
    <h1 className='text-center text-white text-8xl font-extrabold font-mono'>{heading}</h1>
    <div ref={firstRef} className='h-80 w-80 outline-solid outline-white p-20 mx-153 my-10 rounded-[50%]'></div>
    <button className='w-30 bg-white font-extrabold text-center mx-180 my-10 hover:cursor-pointer' onClick={()=>{
        darkMode();
    }}>{btn}</button>
    </>
  )
}

export default page
