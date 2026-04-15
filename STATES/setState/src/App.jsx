import MultipleCallbackFunNoPrevState from "./components/MultipleCallbackFunctionNoPrevState"
import PrevStateMultipleCallback from "./components/PrevStateMultipleCallback"
import SetState from "./components/SetState"
import SetStateCallback from "./components/SetStateCallback"
import WithoutSetState from "./components/WithoutState"

function App() {

  return (
    <>
      {/* 1.Witthout setState() method */}
      {/* <WithoutSetState/> */}

      {/* 2.With SetState() method but without Callback function */}
      {/* <SetState/> */}

      {/* 3.setState method with callback function */}
        {/* <SetStateCallback/> */}

      {/* 4.Multiple Callback Function Without No Prev State */}
        {/* <MultipleCallbackFunNoPrevState/> */}
      
      {/* 5.PrevState With Callback Function */}
        <PrevStateMultipleCallback/>
    </>
  )
}

export default App
