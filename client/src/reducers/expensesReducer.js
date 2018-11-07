export function expensesReducer(state=[], action){
  switch (action.type) {
    case 'ADD_EXPENSE':
      let newState = state.push(action.payload)
      return newState
    case 'GET_EXPENSES':
      return action.payload
    default:
      return state
  }
}
