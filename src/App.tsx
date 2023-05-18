import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Wrapper } from "./components/Wrapper";
import { Test } from "./components/Test";
import Calculator from "./components/Calculator";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <>
      {/* <Navbar /> */}
      {/* <Test/> */}
      {/* <Calculator /> */}
      <Wrapper />
    </>
  );
}

export default App;