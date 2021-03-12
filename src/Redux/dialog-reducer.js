import { deletePost } from "./profile-reducer";

const ADD_MESSAGE = "ADD-MESSAGE";
const DELETE_MESSAGE = "DELETE_MESSAGE"

let initialSate = {
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

}

const dialogReducer = (state=initialSate, action) => {

     switch (action.type) {           
        case ADD_MESSAGE: 
        let newMess = action.newMessageText
        return {
          ...state,
          messagesData: [ ...state.messagesData, {id: 4, mes: newMess}],

        };
        case DELETE_MESSAGE: {
          return {
            ...state, messagesData: state.messagesData.filter(m => m != action.userId)
          }
        }
        
        default: return state;
     }
    
    }
      export const addMessageActionCreator = (newMessageText) => ({type: ADD_MESSAGE, newMessageText})
      export const deleteMessage = (userId) => ({type: DELETE_MESSAGE, userId})

export default dialogReducer