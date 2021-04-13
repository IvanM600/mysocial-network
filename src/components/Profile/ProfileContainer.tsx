import React from "react";
import Profile from "./Profile"
import {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} from "../../Redux/profile-reducer"
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import {compose} from "redux"
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { AppStateType } from "../../Redux/redux-store";
import { ProfileType } from "../../types/types";
import ProfileContent from "./Profile";


type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
  getUserProfile: (userId: number) => void 
  getStatus: (userId: number) => void
  updateStatus: (status: string) => void
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
}

type PathParamsType = {
  userId: string 
}

type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<PropsType> {
  constructor(props: PropsType) {
    super (props)
  }
  refreshProfile(){
    let userId: number | null = +this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
  
    this.props.getUserProfile(userId as number)
  
    this.props.getStatus(userId as number);
  }
    componentDidMount() {
      this.refreshProfile();
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType){
      if (this.props.match.params.userId != prevProps.match.params.userId){      
        this.refreshProfile();
    }
  }

  render() {
   
  return (
    <div>
      <ProfileContent {...this.props} 
               
               isOwner={!this.props.match.params.userId}             
               status={this.props.status}
               updateStatus={this.props.updateStatus}
               savePhoto={this.props.savePhoto}
               saveProfile={this.props.saveProfile}/>
    </div>
    
  )
   }
}


let mapStateToProps = (state: AppStateType) => ({ 
    profile: state.profilesPage.profile,
    status: state.profilesPage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
    
})


 export default compose<React.ComponentType>(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
