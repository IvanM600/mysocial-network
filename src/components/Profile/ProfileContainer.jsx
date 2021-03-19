import React from "react";
import Profile from "./Profile"
import {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} from "../../Redux/profile-reducer"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {compose} from "redux"
import { withAuthRedirect } from "../../HOC/withAuthRedirect";



class ProfileContainer extends React.Component {
  
  refreshProfile(){
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
    componentDidMount() {
      this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState){
      if (this.props.match.params.userId != prevProps.match.params.userId){      
        this.refreshProfile();
    }
  }

  render() {
   
  return (
    <div>
      <Profile {...this.props} 
               isOwner={!this.props.match.params.userId}
               profile={this.props.profile} 
               isAuth={this.props.isAuth} 
               status={this.props.status}
               updateStatus={this.props.updateStatus}
               savePhoto={this.props.savePhoto}
               saveProfile={this.props.saveProfile}/>
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
  connect (mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
