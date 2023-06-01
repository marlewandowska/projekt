import { useEffect, useState } from "react";
import { createClient, Session } from "@supabase/supabase-js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import Nav from "./pages/NavBar";
import Calculator from "./pages/Calculator";
import Calc2 from "./pages/Calculator2";
import Calc3 from "./pages/Calculator3";
import Games from "./pages/Games";
import Cos from "./pages/Cos";

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const supabaseURL = "https://nuqkitkvmomzufdvbhin.supabase.co";
  const supabaseAPI = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51cWtpdGt2bW9tenVmZHZiaGluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyMjAwNDAsImV4cCI6MTk5OTc5NjA0MH0.lKaAn-KVu2gcgyiePcx9dHnlRv5-qObqxtYwrYyl8eI";
  
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const supabase = createClient(supabaseURL, supabaseAPI);
      const session = { access_token: token } as Session;
      supabase.auth.setSession(session);
      setIsLoggedIn(true);
    }
  }, []);



  return (
    <BrowserRouter>
      <div className="App">
        <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="HomePage" element={<Home />} />
          <Route path="/" element={<Login url={supabaseURL} api={supabaseAPI} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="RegisterPage" element={<Register />} />
          <Route path="Calculator" element={<Calculator />} />
          <Route path="Calculator2" element={<Calc2 />} />
          <Route path="Calculator3" element={<Calc3 />} />
          <Route path="Games" element={<Games />} />
          <Route path="Cos" element={<Cos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
