import React from "react"
import { Redirect } from "react-router-dom"
import {connect, MapDispatchToProps} from "react-redux"
import { AppStateType } from "../Redux/redux-store"

let mapStateToPropsForRedirect = (state: AppStateType) => ({ 
    isAuth: state.auth.isAuth
  })

type MapPropsType = {
  isAuth: boolean
}

type DispatchPropsType = {
  
}

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>){
    const RedirectComponent: React.FC<DispatchPropsType & MapPropsType> = (props) => {
        if (!props.isAuth) return <Redirect to="/login" />
        
        let {isAuth, ...restProps} = props
        return <WrappedComponent {...restProps as WCP} />
}
  
  let ConnectedAuthRedirectComponent = connect<MapPropsType, {}, WCP, AppStateType>(mapStateToPropsForRedirect) (RedirectComponent)

return ConnectedAuthRedirectComponent;

}