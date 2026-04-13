// import  { useEffect, useState } from 'react'

//  function SaveColor(key,initialValue) {
//     let save = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [ ]

//     if(save)
//         return save;

//     if(initialValue){
//         return initialValue;
// }

//   return (
//     <h1></h1>
//   )
// }

// // eslint-disable-next-line react-refresh/only-export-components
// export function useColor(key,initaiValue){
//     let [color,setColor]  = useState(() =>{
//         return SaveColor(key,initaiValue)
//     })

//     useEffect(()=>{
//         localStorage.setItem(key, JSON.stringify(color))
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     },[color])

//     return [color ,setColor]
// }



// export default SaveColor;