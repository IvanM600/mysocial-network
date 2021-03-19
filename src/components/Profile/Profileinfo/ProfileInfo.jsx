import React, {useState} from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileBlockFormReduxForm from "./ProfileBlockForm"

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);
   if (!props.profile) {
        return <Preloader />
    } 

    const onMainPhotosSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false);
        })
        
    }
    return (
        <div>
            <div className={classes.descriptionBlock}>
               <img src={props.profile.photos.large || userPhoto} className={classes.mainPhoto}/>
               { props.isOwner && <input type={"file"} onChange={onMainPhotosSelected}/>}
                { editMode ? <ProfileBlockFormReduxForm goToEditMode={props.goToEditMode}
                                                        profile={props.profile}
                                                        onSubmit={onSubmit}
                                                        initialValues={props.profile} /> 
                           : <ProfileBlock profile={props.profile} 
                                           isOwner={props.isOwner} 
                                           goToEditMode={() => {setEditMode(true)}}/> }
                
                <ProfileStatusWithHooks status={props.status}
                               updateStatus={props.updateStatus}/>
            </div>
        </div>

    )
}

const ProfileBlock = (props) => {
    return <div> 
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
                     <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                     })}
                  </div>
               </div>
}




const Contact = ({contactTitle, contactValue}) => {
    return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>
}
export default ProfileInfo