import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Switch, withRouter, Redirect} from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from "react-redux";
import {compose} from "redux"
import {initializeApp} from "./Redux/app-reducer"
import Preloader from './components/common/Preloader/Preloader';
import store from "./Redux/redux-store";
import {Provider} from "react-redux"
import { withSuspense } from './HOC/withSuspense';



const DialogsContainer = React.lazy(() => import("../src/components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))


class App extends Component {
  catchAllUnhandleErrors = (promiseRejectionEvent) => {
          alert("Some error occured")
          console.error(promiseRejectionEvent)
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
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
<Switch>
        
       <Redirect exact from="/" to="/Profile"/> 

        <Route path="/dialogs" 
              render={withSuspense(DialogsContainer)}/>

        <Route path="/profile/:userId?" 
               render={withSuspense(ProfileContainer)}/>

        <Route path="/users" render={ () => <UsersContainer />}/>
        
        <Route path="/login" render={ () => <Login />}/>

        <Route path="*" render={ () => <div>404 not found</div>}/>
</Switch> 
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