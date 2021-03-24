import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {

  
    return (
        <header className={s.header}>
        <img src="https://api.logotip.online/uploads/5210b7a5f793493ba00d74a085830623.png"></img>

        <div className={s.loginBlock}>
          { props.isAuth ? <div> {props.login} <div><button className={s.buttonLogout} onClick={props.logout}>Logout</button></div></div>
         : <NavLink className={s.buttonLogin} to={"/login"}>Login</NavLink> }
        </div>
      </header>
    )
}

export default Header;