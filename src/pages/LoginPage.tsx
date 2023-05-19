import React from "react";

export interface ILoginProps { }

const Login: React.FunctionComponent<ILoginProps> = (props) => {
    return (
        <div className="wrapper">
            <div className="form-box login">
                <h2>Login</h2>
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
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit" className="btn">Log In</button>
                    <div className="login-register">
                        <p>Don't have an account?<a href="RegisterPage" className="register-link">Sign Up</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
