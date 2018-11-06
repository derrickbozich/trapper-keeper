import { combineReducers } from 'redux'
import { itemsReducer } from './itemsReducer'
import { expensesReducer } from './expensesReducer'

const rootReducer = combineReducers({
  items: itemsReducer,
  expenses: expensesReducer
})

export default rootReducer;
