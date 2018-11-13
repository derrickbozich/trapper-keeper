export function salesReducer(state=[], action){
  switch (action.type) {
    case 'GET_SALES':
      debugger
      return action.payload
    default:
      return state
  }
}
