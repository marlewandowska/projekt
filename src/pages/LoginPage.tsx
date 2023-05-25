import { SupabaseClient } from "@supabase/supabase-js";
import React, { useState } from "react";

export interface ILoginProps { }

const Login: React.FunctionComponent<ILoginProps> = (props) => {

    const url = "https://nuqkitkvmomzufdvbhin.supabase.co";
    const api = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51cWtpdGt2bW9tenVmZHZiaGluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyMjAwNDAsImV4cCI6MTk5OTc5NjA0MH0.lKaAn-KVu2gcgyiePcx9dHnlRv5-qObqxtYwrYyl8eI";
    
    const temp = new SupabaseClient(url, api);

    const [newLEmail, setLEmail] = useState('')
    const [newLPassword, setLPassword] = useState('')

    const newLogin = async () => {
        const { data, error } = await temp.auth.signInWithPassword({
            email: newLEmail,
            password: newLPassword
        })
        console.log(data, error)
    }

    return (
        <div className="wrapper">
            <div className="form-box login">
                <h2>Log in</h2>
                <form action="#">
                    <div className="input-box">
                        <span className="icon"><ion-icon name="mail"></ion-icon></span>
                        <input type="email" onChange={(event) => setLEmail(event.target.value)} required />
                        <label>Email</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                        <input type="password" onChange={(event) => setLPassword(event.target.value)} required />
                        <label>Password</label>
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit" className="btn" onClick={() => newLogin()}>Log In</button>
                    <div className="login-register">
                        <p>Don't have an account?<a href="RegisterPage" className="register-link">Sign Up</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
