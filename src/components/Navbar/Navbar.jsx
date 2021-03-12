import React from "react";
import classes from "./Navbar.module.css"
import { NavLink } from "react-router-dom"


const Navbar = (props) => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
      </div>
      <div className={classes.item}>
        <a>News</a>
      </div>
      <div className={classes.item}>
        <a>Music</a>
      </div>
      <div className={classes.item}>
        <a>Settings</a>
      </div>
    </nav>
  )
}

export default Navbar