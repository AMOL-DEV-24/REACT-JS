/* eslint-disable no-unused-vars */
import { PropsDesClass } from "./components/Class Components/PropsDesClass.jsx"
import PropsDesClass1 from "./components/Class Components/PropsDesClass1.jsx"
import { PropsObjectDesClass } from "./components/Class Components/PropsObjectDesClass.jsx"
import PropsDefaultValue from "./components/Functional Components/PropsDefaultValue.jsx"
import PropsDes from "./components/Functional Components/PropsDes"
import PropsDes1 from "./components/Functional Components/PropsDes1.jsx"
import PropsDestructuring from "./components/Functional Components/PropsDestructuring"

function App() {

    let a={
      name: "Amol",
      age: 24
    }

    let arr =[1, 2, 3, 4, 5]
  return (
    <>
      <h1>Props Destructuring</h1>
      {/*! 1st Way   */}
      {/* <PropsDestructuring one="ONE" two={a} three={arr}/> */}
      {/* It created the nested Object using double curly braces {{}} */}
      {/* <PropsDestructuring one="ONE" two={{a}} three={{arr}}/> */}
      {/* <PropsDes name="Amol" age={25}/> */}

      {/* 2nd Way */}
      {/* <PropsDes1 name="Amol Pawar" proff="Software Developer"/> */}

      {/* Object Destructuring */}
      {/* <PropsDesObj name="Amol Pawar" age={25} address="Bhalawani"/> */}

      {/* Props Default Value */}
      {/* <PropsDefaultValue name="John Doe" age ={30}/> */}

      {/* Propsdestructuring in Class */}
      {/* <PropsDesClass name="Amol Pawar" age={25} address="Bhalawani"/> */}
      {/* <PropsDesClass1 name="Amol Pawar" age={25} address="Bhalawani"/> */}
      <PropsObjectDesClass obj={{name : "Amol Pawar", age: 25, address: "Bhalawani"}}/>


    </>
  )
}

export default App
