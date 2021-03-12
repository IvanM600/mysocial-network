import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
//import ProfileContainer from "./components/Profile/ProfileContainer"
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from "react-redux";
import {compose} from "redux"
import {initializeApp} from "./Redux/app-reducer"
import Preloader from './components/common/Preloader/Preloader';
import {BrowserRouter} from "react-router-dom";
import store from "./Redux/redux-store";
import {Provider} from "react-redux"
import { withSuspense } from './HOC/withSuspense';


//import DialogsContainer from "../src/components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import("../src/components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))


class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
 }
 render(){
   if (!this.props.initialized){
   return <Preloader />
   } else 

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">

        <Route path="/dialogs" 
              render={withSuspense(DialogsContainer)}/>

        <Route path="/profile/:userId?" 
               render={withSuspense(ProfileContainer)}/>

        <Route path="/users" render={ () => <UsersContainer />}/>
        
        <Route path="/login" render={ () => <Login />}/>
      </div>
    </div>
  );
 }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose (
  withRouter,
  connect(mapStateToProps, {initializeApp})) (App);

const MainApp = (props) => {
  return <React.StrictMode>
      <BrowserRouter>
      <Provider store={store}>
      <AppContainer />
      </Provider>
      </BrowserRouter>
    </React.StrictMode>
}

export default MainApp;