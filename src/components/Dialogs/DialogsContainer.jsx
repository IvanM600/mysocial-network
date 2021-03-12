import React from "react";
import { addMessageActionCreator } from "../../Redux/dialog-reducer"
import Dialogs from "./Dialogs";
import {connect} from "react-redux"
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import {compose} from "redux"

let mapStateToProps = (state) => {
   return {
      dialogsData: state.dialogPage.dialogsData,
      messagesData: state.dialogPage.messagesData,
      newMessageText: state.dialogPage.newMessageText,
      //isAuth: state.auth.isAuth
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
    sendMessage: (newMessageText) => {
        dispatch(addMessageActionCreator(newMessageText));
    }
   }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)