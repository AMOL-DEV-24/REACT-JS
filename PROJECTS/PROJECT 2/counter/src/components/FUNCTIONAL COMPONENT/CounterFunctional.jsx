import  { useState } from 'react'

export default function CounterFunctional() {

  const [data,setData] = useState(15);


  // let num = 20;


  const add = () =>{

    setData(val => val+1);
    setData(val => val+1);
    setData(val => val+1);
    setData(val => val+1);
    setData(val => val+1);

  }


  const sub = () =>{
    setData(data-1)
  }

  // const add = () =>{
  //   if(data<20){
  //     setData(data+1);
  //   }
  //   console.log(data)

  // }

  // const sub = () =>{
  //   if(data>10){
  //     setData(data-1);
  //   }
  //   console.log(data)
  // }

  return (
    <>
      <h1>Counter : {data}</h1>
      {/* <button onClick={()=>setData(data+1)}>ADD</button>
      <button onClick={()=>setData(data-1)}>SUB</button> */}
      <button onClick={add}>ADD</button>
      <button onClick={sub}>SUB</button>
    </>
  )
}
