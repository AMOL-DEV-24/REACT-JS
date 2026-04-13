import { useEffect, useState } from "react";

function useCurr(currency){

    let [data,setData] = useState({})

    //! Here we taking the Value From User so we using ${currency}
    useEffect(()=>{
<<<<<<< HEAD
        //* fetch method is used to fetch tha data from the server
=======
>>>>>>> 4e16b180a04bf88637fdb562df0500e6e72d0e04
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())//todo:-First then() takes the data convert to in JSON Format and store in res.
        .then((res)=>setData(res[currency])) //? Here we passing res in setData to to render in UI & store in array because it in JSON
    },[currency])
    return data;
    //? data : - The Data is return in Object.
}

//* Here we take .js File Extension because this function return JavaScript Code
<<<<<<< HEAD
=======
//* The Custom 
>>>>>>> 4e16b180a04bf88637fdb562df0500e6e72d0e04

export default useCurr;