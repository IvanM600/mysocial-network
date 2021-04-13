import { AppStateType } from './redux-store';


export const getProfile = (state: AppStateType) => {
    return state.profilesPage.profile
}

export const getStatus = (state: AppStateType) => {
    return state.profilesPage.status
}