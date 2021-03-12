import { Profiler } from "react";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";


let store = {
  _state: {
    profilesPage: {
        posts: [
          {id: 0, message: "Hi, how are you?", likesCount: "40"},
          {id: 1, message: "Its my first post", likesCount: "35"},
        ],
        newPostText: "Ivan.com"
    },
    dialogPage: {
      messagesData: [
          { id: 1, mes: "hi" },
          { id: 2, mes: "How are you?" },
          { id: 3, mes: "Yo" },
        ],
        dialogsData: [
          { id: 1, name: "Ivan" },
          { id: 2, name: "Sasha" },
          { id: 3, name: "Lena" },
          { id: 4, name: "Vika" },
          { id: 5, name: "Nikita" },
          { id: 6, name: "Ira" }
        ],
        newMessageText: "EZ"
    },
},
getState() {
  return this._state;
},

_callSubscriber() {
  console.log("State was changed");
},

subscribe(observer) {
  this._callSubscriber = observer;
},

dispatch(action){

  this._state.profilesPage = profileReducer(this._state.profilesPage, action);
  this._state.dialogPage = dialogReducer(this._state.dialogPage, action);

  this._callSubscriber(this._state);
 }
}




  window.store = store 

export default store;