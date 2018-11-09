export function expensesReducer(state=[], action){
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.payload]
    case 'GET_EXPENSES':
      return action.payload
    default:
      return state
  }
}
