/* eslint-disable no-unused-vars */
import ChildA from "./components/ExampleNo1/ChildA"
import Parent from "./components/ExampleNo2/Parent"

function App() {
    let mine ="Mine"

  return (
    <>
      {/* Props Drilling   */}
      {/* <ChildA name ={mine} /> */}

      <Parent/>
    </>
  )
}

export default App
