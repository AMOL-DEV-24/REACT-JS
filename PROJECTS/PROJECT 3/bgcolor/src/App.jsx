import { useState } from 'react'

import './App.css'
import { useColor } from './components/SimpleBG';

function App() {
  let [color, setColor] = useColor("red")


 
  // let col = () =>{
  //   setColor("black");
  // }


  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-2xl">
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>Black</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"cyan"}} onClick={()=>setColor("cyan")}>Cyan</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
