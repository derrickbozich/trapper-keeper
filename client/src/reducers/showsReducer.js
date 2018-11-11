export function showsReducer(state=[], action){
  switch (action.type) {
    case 'ADD_SHOW':
      return [...state, action.payload]
    case 'GET_SHOWS':
      return action.payload
    case 'DELETE_SHOW':
      return state.filter(show => show.id !== parseInt(action.payload, 10))
    case 'EDIT_SHOW':
      const filteredState = state.filter(show => show.id !== parseInt(action.payload.id, 10))
      return [...filteredState, action.payload]
    default:
      return state
  }
}
