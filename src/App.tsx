import { useState } from "react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import Nav from "./pages/NavBar";


export interface IAppProps { }

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="HomePage" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="RegisterPage" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;