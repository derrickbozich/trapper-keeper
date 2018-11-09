export function salesReducer(state=[], action){
  switch (action.type) {
    case 'GET_SALES':
      return action.payload
    case 'UPDATE_SALES':
      debugger
      return state
    default:
      return state
  }
}
