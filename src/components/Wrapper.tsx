import { useState } from "react";

const Wrapper = () => {
  const [trueOrFalse, setTrueOrFalse] = useState(true);

  function zmienNaFalse() {
    setTrueOrFalse(false);
  }

  function zmienNaTrue() {
    setTrueOrFalse(true);
  }

  if (trueOrFalse === true) {
    return (
      <div className="wrapper">
        <div className="form-box login">
          <h2>Login</h2>
          <form action="#">
            <div className="input-box">
              <span className="icon"></span>
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon"></span>
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <div className="login-register">
              <p>
                Don't have an account?{" "}
                <button className="register-link" onClick={zmienNaFalse}>
                  Register
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  } else if (trueOrFalse === false) {
    return (
      <div className="wrapper">
        <div className="form-box login">
          <h2>Register</h2>
          <form action="#">
            <div className="input-box">
              <span className="icon"></span>
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon"></span>
              <input type="password" required />
              <label>Username</label>
            </div>
            <div className="input-box">
              <span className="icon"></span>
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="input-box">
              <span className="icon"></span>
              <input type="password" required />
              <label>Repeat Password</label>
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" />Accept
              </label>
            </div>
            <button type="submit" className="btn">
              Register
            </button>
            <div className="login-register">
              <p>
                Already have an account?{" "}
                <button className="login-link" onClick={zmienNaTrue}>
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return null; // Dodana linia zwracająca null dla innych przypadków
};

export { Wrapper };
