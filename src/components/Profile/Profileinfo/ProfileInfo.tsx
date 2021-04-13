import React, {ChangeEvent, useState} from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileBlockFormReduxForm from "./ProfileBlockForm"
import { ProfileType } from "../../../types/types";
import {ContactsType} from "../../../types/types"
import { useSelector, useDispatch } from "react-redux";
import { getProfile, getStatus } from "../../../Redux/profile-selector";

type PropsType = {
   // profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean 
    savePhoto: (file: File) => void 
    saveProfile: (profile: ProfileType) => Promise<any>
}

const ProfileInfo: React.FC<PropsType> = (props) => {
    let [editMode, setEditMode] = useState(false);
    const profile = useSelector(getProfile)
    const status = useSelector(getStatus)

    const dispatch = useDispatch()
    


   if (!profile) {
        return <Preloader />
    } 

    const onMainPhotosSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData: ProfileType) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false);
        })
        
    }
    return (
        <div>
            <div className={classes.descriptionBlock}>
               <img src={profile.photos.large || userPhoto} className={classes.mainPhoto}/>
               { props.isOwner && <input type={"file"} onChange={onMainPhotosSelected}/>}
                { editMode ? <ProfileBlockFormReduxForm /*goToEditMode={props.goToEditMode*/
                                                        goToEditMode={() => {setEditMode(false)}}
                                                        profile={profile}
                                                        onSubmit={onSubmit}
                                                        initialValues={profile} /> 
                           : <ProfileBlock profile={profile} 
                                           isOwner={props.isOwner} 
                                           goToEditMode={() => {setEditMode(true)}}/> }
                
                <ProfileStatusWithHooks status={status}
                                        updateStatus={props.updateStatus}/>
            </div>
        </div>

    )
}
type ProfileDataPropsType = {
    profile: ProfileType 
    isOwner: boolean
    goToEditMode: () => void
 }
const ProfileBlock: React.FC<ProfileDataPropsType> = (props) => {
    return <div className={classes.formEdit}> 
                  { props.isOwner && <div><button onClick={props.goToEditMode}>Edit</button></div> }
                   <div>
                     <b>Full name</b>: {props.profile.fullName}
                  </div>
                  <div>
                     <b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
                  </div>
                  { props.profile.lookingForAJob &&
                  <div>
                     <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
                  </div>
                   }
                  <div>
                     <b>About me</b>: {props.profile.aboutMe}
                  </div>
                  <div>
                     <b>Contacts</b>: {Object.keys(props.profile.contacts).map((key) => {
                        return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key as keyof ContactsType]}/>
                     })}
                  </div>
               </div>
}


type ContactsPropsType = {
    contactTitle: string
    contactValue: string 
}

const Contact: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return <div className={classes.contact}><b>{contactTitle}</b> : {contactValue}</div>
}
export default ProfileInfo