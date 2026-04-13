import { Navbar, Profile } from "./components/ClassAndFunction"
import { FirstClass, FourthClass, SecondClass, ThirdClass } from "./components/MultipleClassComponents"
import { Welcome } from "./components/Welcome"

function App() {

  return (
    <>
      <Navbar/>
      <Profile/>
      <FirstClass/>
      <SecondClass/>
      <ThirdClass/>
      <FourthClass/>
      <Welcome/>
    </>
  )
}

export default App
