export function itemsReducer(state=[], action){
  switch (action.type) {
    case 'GET_ITEMS':
      return action.payload
    case 'EDIT_ITEM':
      const filteredState = state.filter(item => item.id !== parseInt(action.payload.id, 10))
      return [...filteredState, action.payload]
    case 'DELETE_ITEM':
      return state.filter(item => item.id !== parseInt(action.payload.id, 10))
    case 'ADD_ITEM':
      let newState = [...state, action.payload]
      return newState
    default:
      return state
  }
}
