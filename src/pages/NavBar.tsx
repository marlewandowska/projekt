import React, { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

export interface INavProps {
    isLoggedIn:boolean,
    setIsLoggedIn:Dispatch<SetStateAction<boolean>>
 }

const Nav: React.FunctionComponent<INavProps> = (props:INavProps) => {
    //przycisk log in
    const nav = useNavigate();
    const logfHPHandler = () => {
        nav('/')
    }
    
    //przycisk home
    const nav2 = useNavigate();
    const hPHandler = () => {
        nav('/HomePage')
    }

    //przycisk calculator
    const nav3 = useNavigate();
    const calcHandler = () => {
        nav('/Calculator')
    }

    const nav4 = useNavigate();
    const logOutHandler = () => {
        // Tutaj możesz dodać kod do wylogowania użytkownika, np. żądanie do API
        // Po pomyślnym wylogowaniu, ustaw stan setIsLoggedIn(false)
        props.setIsLoggedIn(false);
        nav("/");
      };

    return (
    <header>
      <h2 className="logo">logo</h2>

      {props.isLoggedIn && (
        <nav className="navigation">
          <a onClick={hPHandler}>Home</a>
          <a onClick={calcHandler}>Calculator</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <button className="btnLogout" onClick={logOutHandler}>
            Log Out
          </button>
        </nav>
      )}

      {!props.isLoggedIn && (
        <div className="forms">
          <button className="btnLogin-popup" onClick={logfHPHandler}>
            Log In
          </button>
        </div>
      )}
    </header>
  );
};

export default Nav;