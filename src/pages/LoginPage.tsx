import { SupabaseClient } from "@supabase/supabase-js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AsyncButton from "./AsyncButton";

export interface ILoginProps {
  url: string;
  api: string;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  const { url, api } = props;

  const temp = new SupabaseClient(url, api);

  const [newLEmail, setLEmail] = useState("");
  const [newLPassword, setLPassword] = useState("");

  const newLogin = async () => {
    const { data, error } = await temp.auth.signInWithPassword({
      email: newLEmail,
      password: newLPassword,
    });
    console.log(data, error);
    if (data && !error && data.session) {
      localStorage.setItem("accessToken", data.session.access_token);
      props.setIsLoggedIn(true);
      navigateToHomePage();
    }
  };

  const navigate = useNavigate();
  const registerPageHandler = () => {
    navigate("/RegisterPage");
  };

  const navigateToHomePage = () => {
    navigate("/HomePage");
  };

  return (
    <div className="wrapper">
      <div className="form-box login">
        <h2>Log in</h2>
        <form action="#">
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input
              type="email"
              onChange={(event) => setLEmail(event.target.value)}
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
              onChange={(event) => setLPassword(event.target.value)}
              required
            />
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <AsyncButton label={"Log In"} asyncfunction={newLogin} />
          <div className="login-register">
            <p>
              Don't have an account?
              <a onClick={registerPageHandler} className="register-link">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
