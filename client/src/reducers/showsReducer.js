export function showsReducer(state=[], action){
  switch (action.type) {
    case 'ADD_SHOW':
      return [...state, action.payload]
    case 'GET_SHOWS':
      return action.payload
    default:
      return state
  }
}
