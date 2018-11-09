export function expensesReducer(state=[], action){
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.payload]
    case 'GET_EXPENSES':
      return action.payload
    case 'EDIT_EXPENSE':
      const filteredState = state.filter(expense => expense.id != action.payload.id)
      return [...filteredState, action.payload]
    case 'DELETE_EXPENSE':
      return state.filter(expense => expense.id != action.payload)
    default:
      return state
  }
}
