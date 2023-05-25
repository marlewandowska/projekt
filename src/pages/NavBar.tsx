import React from "react";
import { useNavigate } from "react-router-dom";

export interface INavProps { }

const Nav: React.FunctionComponent<INavProps> = (props) => {
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

    return (

        <header>
            <h2 className="logo">logo</h2>

            <nav className="navigation">
                <a onClick={hPHandler}>Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </nav>
            <div className="forms">
                <button className="btnLogin-popup" onClick={logfHPHandler}>Log In</button>
            </div>
        </header>

    );
}

export default Nav;