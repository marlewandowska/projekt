import React from "react";

export interface IRegisterProps {}
 
const Register: React.FunctionComponent<IRegisterProps> = (props) => {
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