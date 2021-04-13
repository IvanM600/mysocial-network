import React from "react";
import { actions } from "../../Redux/dialog-reducer"
import Dialogs from "./Dialogs";
import {connect} from "react-redux"
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import {compose} from "redux"
import { AppStateType } from "../../Redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
   return {
      dialogsData: state.dialogPage.dialogsData,
      messagesData: state.dialogPage.messagesData,
      newMessageText: state.dialogPage.newMessageText,
   }
}


export default compose(
    connect(mapStateToProps, {
       sendMessage: actions.addMessageActionCreator
    }),
    withAuthRedirect
)(Dialogs) as React.ComponentType