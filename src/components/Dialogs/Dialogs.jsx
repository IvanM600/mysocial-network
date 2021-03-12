import React from "react";
import classes from "./Dialogs.module.css"
import Message from "./Message/Message"
import DialogItem from "./Dialogitem/Dialogitem"
import { Redirect } from "react-router-dom"
import { Field, reduxForm } from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls"
import { maxLengthCreator, required } from "../../utils/validators/validators";
 
const maxLength50 = maxLengthCreator(50)

const Dialogs = (props) => {


    let newMessageElements = React.createRef();

    let dialogsElements = props.dialogsData
    .map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} /> );
    
    let messagesElements = props.messagesData
    .map( message => <Message mes={message.mes} key={message.id}/> );

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageText);
    }
    
 if (!props.isAuth) return <Redirect to={"/login"} />
    
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
               
               { dialogsElements }

            </div>
            <div className={classes.messages}>
                <div>{ messagesElements }</div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
return (
       <form onSubmit={props.handleSubmit}> 
                <div>
                <Field component={Textarea} 
                       validate={[required, maxLength50]}
                       name="newMessageText"
                       placeholder="Enter your message"/>
               </div>
                <div>
                    <button>Send</button>
                </div>
       </form>
)
}

const AddMessageFormRedux = reduxForm({
    form: "dialogAddMessageForm"
})(AddMessageForm)

export default Dialogs;