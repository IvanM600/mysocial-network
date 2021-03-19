import React from "react"
import { Field } from "redux-form"
import {Input, Textarea} from "../../common/FormsControls/FormsControls"
import {reduxForm} from "redux-form"
import classes from "./ProfileInfo.module.css"


const ProfileBlockForm = (props, error) => {
    return <form onSubmit={props.handleSubmit}> 
                  {<div><button>Save</button></div> }
                  { props.error && <div className={classes.formSummaryError}>
                        {props.error}
                 </div> }
                   <div>
                     <b>Full name</b>: <Field placeholder={"Full name"} name={"fullName"} component={Input}/>
                  </div>
                  <div>
                     <b>Looking for a job</b>: <Field name={"lookingForAJob"} component={Input} type={"checkbox"}/>
                  </div>
                  
                  <div>
                     <b>My professional skills</b>: <Field placeholder={"My professional skills"} name={"lookingForAJobDescription"} component={Textarea}/>
                  </div>
                   
                  <div>
                     <b>About me</b>:  <Field placeholder={"About me"} name={"aboutMe"} component={Textarea}/>
                  </div>
                   <div>
                     <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                        return <div key={key} className={classes.contact}>
                            <b>{key}: <Field placeholder={key} name={"contacts." + key} component={Input}/></b>
                        </div>
                     })}
                    </div>
               </form>
 }
const ProfileBlockFormReduxForm = reduxForm({form: "edit-profile"})(ProfileBlockForm);

 export default ProfileBlockFormReduxForm