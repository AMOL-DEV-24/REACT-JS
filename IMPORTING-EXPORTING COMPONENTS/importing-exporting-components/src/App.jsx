import DefaultExport from "./components/FunctionalComponents/DefaultExport"
import { Add, Demo1, Demo2 } from "./components/FunctionalComponents/NamedExport"
import { Fun1, Fun2 } from "./components/MultipleExports/MultipleExports"

function App() {

  return (
    <>
      <DefaultExport/>
      <Add a={10} b={20}/>
      <Demo1/>
      <Demo2/>
      <Fun1/>
      <Fun2/>
    </>
  )
}

export default App
