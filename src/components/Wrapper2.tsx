const Wrapper2 = () => {

    return (
        <div className="wrapper2">
        <div className="form-box login">
          <h2>Register</h2>
          <form action="#">
            <div className="input-box">
             <span className="icon"><ion-icon name="mail"></ion-icon></span>  
              <input type="email" required/>
              <label>Email</label>
            </div>
            <div className="input-box">
             <span className="icon"><ion-icon name="person-circle-outline"></ion-icon></span> 
              <input type="password" required/>
              <label>Username</label>
            </div>
            <div className="input-box">
             <span className="icon"><ion-icon name="lock-closed"></ion-icon></span> 
              <input type="password" required/>
              <label>Password</label>
            </div>
            <div className="input-box">
             <span className="icon"><ion-icon name="lock-closed"></ion-icon></span> 
              <input type="password" required/>
              <label>Repeat Password</label>
            </div>




            <div className="remember-forgot">
              <label><input type="checkbox"/>Accept</label>
            </div>
            <button type="submit" className="btn">Register</button>
            <div className="login-register">
              <p>Already have an account?<a href="#" className="login-link">Login</a></p>
            </div>
          </form>
        </div>
    </div>
    
    )
    
}



export { Wrapper2 }

