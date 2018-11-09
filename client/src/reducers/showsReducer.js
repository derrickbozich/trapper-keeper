export function showsReducer(state=[], action){
  switch (action.type) {
    case 'ADD_SHOW':
      return [...state, action.payload]
    case 'GET_SHOWS':
      return action.payload
    case 'DELETE_SHOW':
      return state.filter(show => show.id != action.payload)
    case 'EDIT_SHOW':
      const filteredState = state.filter(show => show.id != action.payload.id)
      return [...filteredState, action.payload]
    default:
      return state
  }
}
