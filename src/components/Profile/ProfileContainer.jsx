import React from "react";
import Profile from "./Profile"
import {getUserProfile, getStatus, updateStatus} from "../../Redux/profile-reducer"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {compose} from "redux"




class ProfileContainer extends React.Component {
    componentDidCatch() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }

    this.props.getUserProfile(userId)

    this.props.getStatus(userId);
    }
  render() {
   
  return (
    <div>
      <Profile {...this.props} 
               profile={this.props.profile} 
               isAuth={this.props.isAuth} 
               status={this.props.status}
               updateStatus={this.props.updateStatus}/>
    </div>
    
  )
   }
}


let mapStateToProps = (state) => ({ 
    profile: state.profilesPage.profile,
    status: state.profilesPage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
    
})


 export default compose(
  connect (mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
  //withAuthRedirect
)(ProfileContainer)
