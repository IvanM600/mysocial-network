import React from "react";
import { NavLink } from "react-router-dom";
import {UserOutlined} from "@ant-design/icons"
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUserLogin, selectIsAuth } from "../../Redux/auth-selector";
import {logout} from "../../Redux/auth-reducer"
import {Avatar, Button, Col, Layout, Menu, Row} from 'antd'


export const AppHeader = (props) => {

  const isAuth = useSelector(selectIsAuth)
  const login = useSelector(selectCurrentUserLogin)

  const dispatch = useDispatch()

  const logoutCallback = () => {
    dispatch(logout())
  }

  const { Header} = Layout;

    return <Header className="header">
    <div className="logo" />
    <Row>
        <Col span={18}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
             <Menu.Item key="1"><NavLink to="/developers">Developers</NavLink></Menu.Item>
          </Menu>
        </Col>
        

        {isAuth
                ?<> <Col span={1}>
                    <Avatar alt={login || ''} style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                </Col>
                    <Col span={5}>
                        <Button onClick={logoutCallback}>Log out</Button>
                    </Col>
                </>
                : <Col span={6}>
                    <Button>
                        <NavLink to={'/login'}>Login</NavLink>
                    </Button>
                </Col>}

    </Row>
  </Header>

        /*<header className={s.header}>
        <img src="https://api.logotip.online/uploads/5210b7a5f793493ba00d74a085830623.png"></img>

        <div className={s.loginBlock}>
          { props.isAuth ? <div> {props.login} <div><button className={s.buttonLogout} onClick={props.logout}>Logout</button></div></div>
         : <NavLink className={s.buttonLogin} to={"/login"}>Login</NavLink> }
        </div>
      </header>
    )*/
}

