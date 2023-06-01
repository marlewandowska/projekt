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
    const hPHandler = () => {
        nav('/HomePage')
    }

    //przycisk calculator
    const calcHandler = () => {
        nav('/Calculator')
    }

    //przycisk games
    const gamesHandler = () => {
      nav('/Games')
    }
    
    //przycisk cos
    const cosHandler = () => {
      nav('/Cos')
    }

    const logOutHandler = () => {
        localStorage.removeItem("accessToken"); // Usunięcie tokenu z localStorage
        props.setIsLoggedIn(false); // Ustawienie stanu uwierzytelnienia na false
        nav("/");
      };

    return (
    <header>
      <h2 className="logo">logo</h2>

      {props.isLoggedIn && (
        <nav className="navigation">
          <a onClick={hPHandler}>Home</a>
          <a onClick={calcHandler}>Calculator</a>
          <a onClick={gamesHandler}>Games</a>
          <a onClick={cosHandler}>Cos</a>
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