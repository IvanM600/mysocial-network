import { UserType } from './../types/types';
import axios from "axios"


 export const instance = axios.create({
        withCredentials: true,
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        headers: {  
            "API-KEY": "49aaf59c-12df-4670-9400-3b9917430dc1"
        }
     
 });


export enum ResultCodesEnum {
   Success = 0,
   Error = 1,
}

export enum ResultCodesForCaptcha {
   CaptchaIsRequired = 10
}

export type MeResponseType = {
   data: { id: number, email: string, login: string}
   resultCode: ResultCodesEnum
   messages: Array<string>
}

export type LoginMeResponseType = {
   data: { userId: number }
   resultCode: ResultCodesEnum | ResultCodesForCaptcha
   messages: Array<string>
}

 export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
 }

 export type ResponseType<D = {}, RC = ResultCodesEnum> = {
   data: D
   message: Array<string>
   resultCode: RC
}
 
export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
   data: D
   message: Array<string>
   resultCode: RC
}


 


