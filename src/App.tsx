import React, { Component } from 'react'
import './App.css';
import 'antd/dist/antd.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Switch, withRouter, Redirect} from "react-router-dom";
import {Login} from './components/Login/Login';
import { connect } from "react-redux";
import {compose} from "redux"
import {initializeApp} from "./Redux/app-reducer"
import Preloader from './components/common/Preloader/Preloader';
import store, { AppStateType } from "./Redux/redux-store";
import {Provider} from "react-redux"
import { withSuspense } from './HOC/withSuspense';
import { UsersPage } from './components/Users/UsersContainer'
import { NavLink } from "react-router-dom"
import { Avatar, Row, Col } from 'antd';


import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {AppHeader} from './components/Header/Header';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const ChatPage = React.lazy(() => import("./pages/ChatPage"))

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeApp: () => void
}

const SuspendedDialogs = withSuspense(DialogsContainer);
const SuspendedProfile = withSuspense(ProfileContainer);
const SuspendedChatPage = withSuspense(ChatPage)


class App extends Component<MapPropsType & DispatchPropsType> {
  catchAllUnhandleErrors = (e: PromiseRejectionEvent) => {
          alert("Some error occured")
          console.error(PromiseRejectionEvent)
  }
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandleErrors)
 }
 componentWillUnmount() {
  window.addEventListener("unhandledrejection", this.catchAllUnhandleErrors)
 }
 render(){
   if (!this.props.initialized){
   return <Preloader />
   } else 

  return (
    <Layout>
    <AppHeader />
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            //defaultSelectedKeys={['7']}
           // defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >

            <SubMenu key="sub1" icon={<UserOutlined />} title="My Profile">
              <Menu.Item key="1"><NavLink to="/profile">Profile</NavLink></Menu.Item>
              <Menu.Item key="2"><NavLink to="/dialogs">Messages</NavLink></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Developers">
              <Menu.Item key="5"><NavLink to="/developers">Users</NavLink></Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
              <Menu.Item key="9"><NavLink to="/chat">Chat</NavLink></Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
 <Switch>
        
        <Redirect exact from="/" to="/Profile"/> 
 
         <Route path="/dialogs" 
               render={() => <SuspendedDialogs />}/>
 
         <Route path="/profile/:userId?" 
                render={() => <SuspendedProfile />}/>
 
         <Route path="/developers" render={ () => <UsersPage pageTitle={"Пользователи"} />}/>
         
         <Route path="/login" render={ () => <Login />}/>

         <Route path="/chat" render={ () => <SuspendedChatPage />}/>
          
         <Route path="/mysocial-network" render={ () => <Login />}/>
 
         <Route path="*" render={ () => <div>404 not found</div>}/>
 </Switch> 
        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Social Network ©2021 Created by Ivan Staroverov</Footer>
  </Layout>
  );
 }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

let AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, {initializeApp})) (App);

const MainApp: React.FC = () => {
  return <React.StrictMode>
      <BrowserRouter>
         <Provider store={store}>
            <AppContainer />
         </Provider>
      </BrowserRouter>
    </React.StrictMode>
}

export default MainApp;