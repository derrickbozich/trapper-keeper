export function totalsReducer(state=[], action){
  switch (action.type) {
    case 'GET_TOTALS':
      return action.payload
    case 'RENDER_TOTALS':
      return action.payload
    default:
      return state
  }
}
