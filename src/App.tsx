import { useState } from "react";
import { Navbar } from "./components/Navbar"
import { Wrapper } from "./components/Wrapper"
import { Test } from "./components/Test";


type TPageState = "Login" | "Register"

function App() {
  const [pageState, setPageState] = useState<TPageState>("Login");
  return (
    <>
      <Navbar />
      <Test/>

      {/* <Wrapper /> */}
    </>
  )
  
}


export default App
