import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
   if (!props.profile) {
        return <Preloader />
    } 
    return (
        <div>
            {/*<div>
                <img src="https://www.w3schools.com/w3css/img_lights.jpg"></img>
            </div> */}
            <div className={classes.descriptionBlock}>
               <img src={props.profile.photos.large}/>
                <ProfileStatusWithHooks status={props.status}
                               updateStatus={props.updateStatus}/>
            </div>
        </div>

    )
}
export default ProfileInfo