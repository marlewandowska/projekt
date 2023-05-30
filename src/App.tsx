import { useState } from "react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import Nav from "./pages/NavBar";
import Calculator from "./pages/Calculator";

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const supabaseURL = "https://nuqkitkvmomzufdvbhin.supabase.co";
  const supabaseAPI = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51cWtpdGt2bW9tenVmZHZiaGluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyMjAwNDAsImV4cCI6MTk5OTc5NjA0MH0.lKaAn-KVu2gcgyiePcx9dHnlRv5-qObqxtYwrYyl8eI";

  return (
    <BrowserRouter>
      <div className="App">
        <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="HomePage" element={<Home />} />
          <Route path="/" element={<Login url={supabaseURL} api={supabaseAPI} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="RegisterPage" element={<Register />} />
          <Route path="Calculator" element={<Calculator />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
