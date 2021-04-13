import { createStore, combineReducers, applyMiddleware, compose, Action } from "redux";
import profileReducer from "./profile-reducer";
import  dialogReducer from "./dialog-reducer"
import usersReducer from "./users-reducer"
import authReducer from "./auth-reducer"
import thunk, {ThunkAction} from "redux-thunk";
import { ActionTypes, reducer as formReducer } from "redux-form"
import appReducer from "./app-reducer"


let rootReducer = combineReducers({
    profilesPage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

type RootReducerType = typeof rootReducer 
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never


export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>
// @ts-ignore 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ))
// @ts-ignore
window._store_ = store
export default store