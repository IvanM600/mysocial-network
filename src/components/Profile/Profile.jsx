import React from "react";
import MyPostsContainer from "./MyPosts/MyPostContainer";
import ProfileInfo from "./Profileinfo/ProfileInfo";


const ProfileContent = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} 
                   status={props.status}
                   updateStatus={props.updateStatus}
                   isOwner={props.isOwner}
                   savePhoto={props.savePhoto}
                   saveProfile={props.saveProfile}/>
      <MyPostsContainer  /> 
    </div>
    
  )
}

export default ProfileContent