import { SupabaseClient } from "@supabase/supabase-js";
import React from "react";

export interface IRegisterProps {}
 
const Register: React.FunctionComponent<IRegisterProps> = (props) => {

    const url = "https://nuqkitkvmomzufdvbhin.supabase.co";
    const api = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51cWtpdGt2bW9tenVmZHZiaGluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyMjAwNDAsImV4cCI6MTk5OTc5NjA0MH0.lKaAn-KVu2gcgyiePcx9dHnlRv5-qObqxtYwrYyl8eI";
    
    const temp = new SupabaseClient(url, api);

    const fun = async () => {
        const { data, error } = await temp.auth.signUp({
            email: "test@test.pl",
            password: "test1234"
        })
        console.log(data, error)
    }


    return ( 
        <div className="wrapper2">
            <div className="form-box login">
                <h2>Sign Up</h2>
                <form action="#">
                    <div className="input-box">
                        <span className="icon"><ion-icon name="mail"></ion-icon></span>
                        <input type="email" required />
                        <label>Email</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                        <input type="password" required />
                        <label>Password</label>
                    </div>
                    <button type="submit" className="btn">Sign Up</button>
                    <div className="login-register">
                        <p>Already have an account?<a href="LoginPage" className="register-link">Log In</a></p>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Register;