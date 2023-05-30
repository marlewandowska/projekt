import { SupabaseClient } from "@supabase/supabase-js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AsyncButton from "./AsyncButton";

export interface IRegisterProps {}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
  const url = "https://nuqkitkvmomzufdvbhin.supabase.co";
  const api =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51cWtpdGt2bW9tenVmZHZiaGluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyMjAwNDAsImV4cCI6MTk5OTc5NjA0MH0.lKaAn-KVu2gcgyiePcx9dHnlRv5-qObqxtYwrYyl8eI";

  const temp = new SupabaseClient(url, api);

  const [newREmail, setREmail] = useState("");
  const [newRPassword, setRPassword] = useState("");

  const newRegister = async () => {
    const { data, error } = await temp.auth.signUp({
      email: newREmail,
      password: newRPassword,
    });
    console.log(data, error);
    if (data && !error) {
        loginPageHandler();
    }
  };

  const navigate = useNavigate();
  const loginPageHandler = () => {
    navigate("/");
  };

  const navigateToLoginPage = () => {
    navigate("/LoginPage");
  };

  return (
    <div className="wrapper2">
      <div className="form-box login">
        <h2>Sign Up</h2>
        <form action="#">
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input
              type="email"
              onChange={(event) => setREmail(event.target.value)}
              required
            />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input
              type="password"
              onChange={(event) => setRPassword(event.target.value)}
              required
            />
            <label>Password</label>
          </div>
          <AsyncButton label={"Sing Up"} asyncfunction={newRegister} />
          <div className="login-register">
            <p>
              Already have an account?
              <a onClick={loginPageHandler} className="register-link">
                Log In
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
