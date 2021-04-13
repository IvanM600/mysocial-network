import React from "react";
import { ProfileType } from "../../types/types";
import {MyPosts} from "./MyPosts/MyPosts"
import ProfileInfo from "./Profileinfo/ProfileInfo";


type PropsType = {
  //profile: ProfileType
  status: string 
  updateStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
}
const ProfileContent: React.FC<PropsType> = (props) => {
  return (
    <div>
      <ProfileInfo  
                   status={props.status}
                   updateStatus={props.updateStatus}
                   isOwner={props.isOwner}
                   savePhoto={props.savePhoto}
                   saveProfile={props.saveProfile}/>
      <MyPosts /> 
    </div>
    
  )
}

export default ProfileContent