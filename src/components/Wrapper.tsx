import { useState, useEffect } from "react";

const Wrapper = () => {
  const [trueOrFalse, setTrueOrFalse] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  useEffect(() => {
    localStorage.setItem("loggedIn", String(trueOrFalse));
  }, [trueOrFalse]);

  useEffect(() => {
    if (trueOrFalse) {
      document.querySelector('.wrapper')?.classList.remove('increased-height');
    } else {
      document.querySelector('.wrapper')?.classList.add('increased-height');
    }
  }, [trueOrFalse]);

  function zmienNaFalse() {
    setTrueOrFalse(false);
  }

  function zmienNaTrue() {
    setTrueOrFalse(true);
  }

  return (
    <div className={`wrapper${trueOrFalse ? "" : " increased-height"}`}>
      <div className="form-box login">
        <h2>{trueOrFalse ? "Login" : "Register"}</h2>
        <form action="#">
          {trueOrFalse ? (
            <>
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
            </>
          ) : (
            <>
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
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export { Wrapper };
