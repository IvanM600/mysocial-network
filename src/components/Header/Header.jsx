import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {

  
    return (
        <header className={classes.header}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-QBRekTRh5l9jt90WeC_6L5LjKlT4IDf3Ew&usqp=CAU"></img>

        <div className={classes.loginBlock}>
          { props.isAuth ? <div> {props.login} - <button onClick={props.logout}>Log out</button> </div>
         : <NavLink to={"/login"}>Login</NavLink> }
        </div>
      </header>
    )
}

export default Header;