import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {

  
    return (
        <header className={s.header}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-QBRekTRh5l9jt90WeC_6L5LjKlT4IDf3Ew&usqp=CAU"></img>

        <div className={s.loginBlock}>
          { props.isAuth ? <div> {props.login} <div><button className={s.buttonLogout} onClick={props.logout}>Logout</button></div></div>
         : <NavLink className={s.buttonLogin} to={"/login"}>Login</NavLink> }
        </div>
      </header>
    )
}

export default Header;