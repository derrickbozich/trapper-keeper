export function itemsReducer(state=[], action){
  switch (action.type) {
    case 'GET_ITEMS':
      let newState = state.push(action.payload)
      return newState
    case 'ADD_ITEM':
      newState = state.push(action.payload)
      return newState
    default:
      return state
  }
}
