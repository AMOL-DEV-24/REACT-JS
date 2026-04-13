/* eslint-disable no-unused-vars */
import ArrayProps from "./components/FunctionalComponents/ArrayProps"
import Card from "./components/FunctionalComponents/Card"
import CardDemo from "./components/FunctionalComponents/CardDemo"
import List from "./components/FunctionalComponents/List"
import ObjectProps from "./components/FunctionalComponents/ObjectProps"
import Props from "./components/FunctionalComponents/Props"
import Student from "./components/FunctionalComponents/Student"
import Task from "./components/FunctionalComponents/Task"
import { Employee } from "./data/Array"
import Img1 from "./assets/Goku.jpg"
import Img2 from "./Images/apple-watch.png"
import PropsImmutable from "./components/FunctionalComponents/PropsImmutable"
import StringProps from "./components/FunctionalComponents/StringProps"
import ValueProps from "./components/FunctionalComponents/ValueProps"
import FunctionProps from "./components/FunctionalComponents/FunctionProps"
import Greet from "./components/ClassComponents/Greet"
import StudentClass from "./components/ClassComponents/StudentClass"
import ChildrenProps from "./components/FunctionalComponents/ChildrenProps"

function App() {

  //! Paassing Function as Props
   
  let demo = function functionDemo(){
    return 1+2;
  }

  //! Passing Object as Props 
  let a ={
    name: "Amol Pawar",
    age: 25,
    email: "24amolpawar@gmail.com"
  }

  //! Passing Array as Props
  let arr = [100, 200, 300, 400, 500] 

  return (
    <>
      <h1>Props</h1>
      {/* 1.Pases the Props in the Functional Component */}
      {/* We need to pass the attributes */}
      {/* <Student name="Amol Pawar" email="24amolpawar@gmail.com"/> */}

      {/* 2.Props makes the Component Reusable */}
      {/* <Student name="Ganesh Gidde" email="giddeganesh47@gmail.com"/>
      <Student name ="Ashutosh Naikwadi" email="ashutoshnaikwadi@gmail.com"/> */}

      {/* 3.Props Children */}
      {/* A.In Class Component  */}
      {/* <Student name="John Doe" email="john.deo@example.com">
        <p>This is a child element passed as children props</p>
      </Student> */}
      {/* B.In Functional Component */}
      {/* <ChildrenProps name="Amol">
        <p>This is Children props Demo</p>
      </ChildrenProps> */}

      {/* 4.List Component to demostarte the props.children */}
      {/* <List>
        <span>Apple</span>
        <span>Banana</span>
        <span>Grapes</span>
        <span>Mango</span>
      </List> */}

      {/* <Props name="App Compon2ent"/> */}

      {/* 5.Mapping the Component  */}
      {/* <div>
        {
          Employee.map((emp, index)=>{
            return <Task key={index} name={emp.name} age={emp.age} retiredate={emp.retiredate}/>
          })
        }
      </div> */}
      {/* <div>
        {
          Employee.map((emp, index)=>(
           <Task key={index} name={emp.name} age={emp.age} retiredate={emp.retiredate}/>
          ))
        }
      </div> */}

      {/* 6.Passing Array Props */}
      {/* <ArrayProps arr={[10, 20, 30, 40, 50]} /> */}
  
      {/* 7.Object Props */}
      {/* <ObjectProps obj={{name: "Amol Pawar", age: 25, email: "24amolpawar@gmail.com"}} /> */}

      {/* 8.Injecting Props into component */}
      {/* <Card one="ONE" two="TWO" three={arr}/>
      <Card one="ONE" />
      <Card one="ONE" demo={demo} a={a}/> */}

      {/* 9.Injectin Image as Props into the Component */}
      {/* <CardDemo one= "ONE" two={{a}} three ={{arr}} four="Log IN" five={Img1} />
      <CardDemo one= "FUN" four="Log Out" five={Img2} /> */}

      {/* 10.Props Immutable */}
      {/* <PropsImmutable name="Amol Pawar" /> */}
      {/* <StringProps name="Amol Pawar" /> */}
      {/* <ValueProps age={25} /> */}

      {/* 11.Passing Function As Props  */}
      {/* <FunctionProps Fun={demo}/> */}

      {/* 12.Class Component */}
      {/* Props  mamkes the component reusable  */}
      {/* <Greet name="Amol"/> */}
      {/* <Greet name="Ganesh"/> */}
      {/* <Greet name="Ashutosh"/> */}
      <StudentClass name="Amol Pawar" />
    </>
  )
}

export default App
