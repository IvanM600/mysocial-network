import { InferActionsTypes } from './redux-store';


type DialogType = {
  id: number
  name: string
}
type MessageType = {
  id: number
  mes: string
}

let initialState = {
    messagesData: [
        { id: 1, mes: "hi" },
        { id: 2, mes: "How are you?" },
        { id: 3, mes: "Yo" },
      ] as Array<MessageType>,
      dialogsData: [
        { id: 1, name: "Ivan" },
        { id: 2, name: "Sasha" },
        { id: 3, name: "Lena" },
        { id: 4, name: "Vika" },
        { id: 5, name: "Nikita" },
        { id: 6, name: "Ira" }
      ] as Array<DialogType>,
      newMessageText: ""

}


export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const dialogReducer = (state=initialState, action: ActionsType): InitialStateType => {

     switch (action.type) {           
        case "SN/DIALOGS/ADD-MESSAGE": 
        let newMess = action.newMessageText
        return {
          ...state,
          messagesData: [ ...state.messagesData, {id: 4, mes: newMess}],

        };
        case "SN/DIALOGS/DELETE_MESSAGE": {
          return {
            ...state, messagesData: state.messagesData.filter(m => m.id != action.userId)
          }
        }
        
        default: return state;
     }
    
    }
      export const actions = {
        addMessageActionCreator: (newMessageText: string) => ({type: "SN/DIALOGS/ADD-MESSAGE", newMessageText} as const),
        deleteMessage: (userId: number | null) => ({type: "SN/DIALOGS/DELETE_MESSAGE", userId} as const)
      }

      
      

export default dialogReducer