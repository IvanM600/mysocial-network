import { BaseThunkType, InferActionsTypes } from './redux-store';
import { ResultCodesForCaptcha} from './../api/api';
import {ResultCodesEnum} from "../api/api"
import {authAPI} from "../api/auth-api"
import {securityAPI} from "../api/security-api"
import {stopSubmit} from "redux-form"
import {FormAction} from 'redux-form/lib/actions'


/*export type initialStateType2 = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null
}*/

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
};

const authReducer = (state=initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SN/auth/SET_USER_DATA":
        case "SN/auth/GET_CAPTCHA_URL_SUCCESS":
           return {
               ...state, 
               ...action.payload,
            } 

            default:
                return state;
        
    }
   
}

export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: "SN/auth/SET_USER_DATA", payload: {userId, email, login, isAuth}
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: "SN/auth/GET_CAPTCHA_URL_SUCCESS", payload: {captchaUrl}
    }  as const)
}


export const getAuthUserData = (): ThunkType => async (dispatch) => {
  let meData = await authAPI.me();
        if (meData.resultCode === ResultCodesEnum.Success) {
            let {id, login, email} = meData.data;
            dispatch(actions.setAuthUserData(id, email, login, true));
        }
}



export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
  let data = await authAPI.login(email, password, rememberMe, captcha);
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(getAuthUserData())
        } else {
            if (data.resultCode === ResultCodesForCaptcha.CaptchaIsRequired) {
                dispatch(getCaptchaUrl())
            }
            let messages = data.message.length > 0 ? data.message[0] : "Some error";
            dispatch(stopSubmit("login", {_error: messages}))
        }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
         const captchaUrl = data.url;
              dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
          }


export const logout = (): ThunkType => async (dispatch: any) => {
    let response = await authAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(actions.setAuthUserData(null, null, null, false))
        }
}
export default authReducer;


export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>