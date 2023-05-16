import { useState } from "react";
import { Navbar } from "./components/Navbar"
import { Wrapper } from "./components/Wrapper"
import { Test } from "./components/Test";



function App() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <Navbar />
      <Test/>

      {/* <Wrapper /> */}
    </>
  )
  
}


export default App
 