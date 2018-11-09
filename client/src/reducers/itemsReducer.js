export function itemsReducer(state=[], action){
  switch (action.type) {
    case 'GET_ITEMS':
      return action.payload
    case 'EDIT_ITEM':
      const filteredState = state.filter(item => item.id != action.payload.id)
      return [...filteredState, action.payload]
    case 'ADD_ITEM':
      let newState = [...state, action.payload]
      return newState
    default:
      return state
  }
}
