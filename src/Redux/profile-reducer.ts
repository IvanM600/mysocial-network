import { FormAction } from 'redux-form/lib/actions';
import { InferActionsTypes, BaseThunkType } from './redux-store';
import { PhotosType, ProfileType } from './../types/types';
import { stopSubmit } from "redux-form";
import {profileAPI} from "../api/profile-api"

type PostType = {
    id: number
    message: string 
    likesCount: number
}

let initialState = {
    posts: [
        {id: 0, message: "Hi, how are you?", likesCount: 40},
        {id: 1, message: "Its my first post", likesCount: 35},
      ] as Array<PostType>, 
      profile: null as ProfileType | null,
      status: "",
      newPostText: "" 
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType> | FormAction

const profileReducer = (state=initialState, action: ActionsType): InitialStateType  => {
    switch (action.type) {
        case "SN/ADD-POST": {

            let newPost = action.newPostText;
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: newPost, likesCount: 0}],
            }
        }

        case "SN/SET_USER_PROFILE": {
            return {
                ...state, profile: action.profile
            }
        }
        case "SN/SET_STATUS": {
            return {
               ...state, status: action.status
            }
        }
        case "SN/DELETE_POST": {
            return {
               ...state, posts: state.posts.filter(p => p.id != action.postId)
            }
        }
        case "SN/SAVE_PHOTO_SUCCESS": {
            return {
               ...state, profile: {...state.profile, photos: action.photos} as ProfileType
            }
        }
            default:
                return state;
        
    }
   
}

export const actions = {
    addPostActionCreator: (newPostText: string) => ({type: "SN/ADD-POST", newPostText} as const),
    setUserProfile: (profile: ProfileType ) => ({type: "SN/SET_USER_PROFILE", profile} as const),
    setStatus: (status: string) => ({type: "SN/SET_STATUS", status} as const),
    deletePost: (postId: number) => ({type: "SN/DELETE_POST", postId} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: "SN/SAVE_PHOTO_SUCCESS", photos} as const)

}

  export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
   let data = await profileAPI.getProfile(userId);
        dispatch(actions.setUserProfile(data));
  }
  export const getStatus = (userId: number): ThunkType => async (dispatch) => {
   let data = await profileAPI.getStatus(userId);
        dispatch(actions.setStatus(data));
  }

  export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  try {
    let data = await profileAPI.updateStatus(status);
        if (data.resultCode === 0) {
        dispatch(actions.setStatus(status));
        }
    } catch (error) {
        
    }
  }

  export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(file);
          if (data.resultCode === 0) {
          dispatch(actions.savePhotoSuccess(data.data.photos));
          }
    }

    export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
        const userId = getState().auth.userId;
        const data = await profileAPI.saveProfile(profile);
              if (data.resultCode === 0) {
                  if (userId != null) {
                      // @ts-ignore
              dispatch(getUserProfile(userId));
                  } else {
                      throw new Error("userId cant be null")
                  }
              } else {
                  // @ts-ignore
                  dispatch(stopSubmit("edit-profile", {_error: data.message[0]}));
                  return Promise.reject(data.message[0])
              }
        }

export default profileReducer;