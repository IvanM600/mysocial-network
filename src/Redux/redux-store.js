import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import profileReducer from "./profile-reducer";
import  dialogReducer from "../Redux/dialog-reducer"
import usersReducer from "../Redux/users-reducer"
import authReducer from "./auth-reducer"
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form"
import appReducer from "./app-reducer"


let reducers = combineReducers({
    profilesPage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));
window._store_ = store;
export default store;