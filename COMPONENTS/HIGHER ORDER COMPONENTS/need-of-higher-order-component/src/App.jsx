/* eslint-disable no-unused-vars */
import ClickCounter from "./components/ClickCounter"
import HoverCounter from "./components/HoverCounter"

function App() {

  return (
    <>
      <h1>Need Of Higher Order Component</h1>
      <p>Here Both Component have same logic code. So HOC Help the writing once and use multiple times that code.</p>
    
      {/* <ClickCounter/> */}

      <HoverCounter/>
    </>
  )
}

export default App
