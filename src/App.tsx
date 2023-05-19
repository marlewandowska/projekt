import { useState } from "react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";


export interface IAppProps {}
 
const App: React.FunctionComponent<IAppProps> = (props) => {
  return ( 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="LoginPage" element={<Login />}/>
          <Route path="RegisterPage" element={<Register />}/>
        </Routes>
      </BrowserRouter>
   );
}
 

export default App;