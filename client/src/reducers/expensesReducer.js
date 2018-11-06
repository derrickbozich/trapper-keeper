export function itemsReducer(state=[], action){
  switch (action.type) {
    case 'ADD_EXPENSE':
      debugger
      let newState = state.push(action.payload)
      return newState
    default:
      return state
  }
}
