/* eslint-disable no-unused-vars */
import ComponentDidMount from "./components/componentDidMount( )"
import Constructor from "./components/constructor( )"
import GetDerivedStateFromProps from "./components/getDerivedStateFromProps( )"
import LifeCycleA from "./components/LifeCycleA"
import Render from "./components/render( )"

function App() {

  return (
    <>
    {/* 1.constructor() method */}
      {/* <Constructor count={0}/> */}

      {/* 2.GetDerivedStateFromProps() method */}
      {/* <GetDerivedStateFromProps favCol = "Red"/> */}

      {/* 3.ComponentDidMount() method*/}
      {/* <ComponentDidMount/> */}

      {/* 4.Render() */}
      {/* <Render/> */}

      <LifeCycleA/>
    </>
  )
}

export default App
