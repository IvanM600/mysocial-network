import React from "react";
import MyPostsContainer from "./MyPosts/MyPostContainer";
import ProfileInfo from "./Profileinfo/ProfileInfo";


const ProfileContent = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} 
                   status={props.status}
                   updateStatus={props.updateStatus}/>
      <MyPostsContainer  /> 
    </div>
    
  )
}

export default ProfileContent