/* eslint-disable no-unused-vars */
import BindingInArrowFunction from "./components/BindingInArrowFunction"
import BindingInConstructor from "./components/BindingInConstructor"
import BindingInRenderMethod from "./components/BindingInRenderMethod"
import MethodAsArrowBinding from "./components/MethodAsArrowBinding"
import WhyEventBinding from "./components/WhyEventBinding"

function App() {

  return (
    <>
      <h1>BINDING THE EVENT HANDLER</h1>

      {/* <WhyEventBinding/> */}

      {/* 1.Binding in the Render Method */}
      {/* <BindingInRenderMethod/> */}

      {/* 2.Binding In the Constructor */}
      {/* <BindingInConstructor/> */}

      {/* 3.Binding in the Method As Class Property  */}
      {/* <MethodAsArrowBinding/> */}

      {/* 4.Binding the Event Handler in Arrow Function */}
      <BindingInArrowFunction/>
    </>
  )
}

export default App
