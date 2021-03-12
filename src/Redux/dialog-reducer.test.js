import dialogReducer, {addMessageActionCreator, deleteMessage} from "./dialog-reducer"

let state = {
    messagesData: [
        { id: 1, mes: "hi" },
        { id: 2, mes: "How are you?" },
        { id: 3, mes: "Yo" },
      ]

}

test('length of posts should be incremented', () => {
    let action = addMessageActionCreator("reactjstopp")
    let newState = dialogReducer(state, action)
   expect(newState.messagesData.length).toBe(4);
  });

  test('delete message', () => {
    let action = deleteMessage(1)
    let newState = dialogReducer(state, action)
   expect(newState.messagesData.length).toBe(3);
  });
  