export function itemsReducer(state=[], action){
  switch (action.type) {
    case 'GET_ITEMS':
      return action.payload
    case 'ADD_ITEM':
      let newState = [...state, action.payload]
      return newState
    default:
      return state
  }
}
