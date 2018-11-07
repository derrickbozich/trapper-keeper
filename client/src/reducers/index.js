import { combineReducers } from 'redux'
import { itemsReducer } from './itemsReducer'
import { expensesReducer } from './expensesReducer'
import { cartsReducer } from './cartsReducer'

const rootReducer = combineReducers({
  items: itemsReducer,
  expenses: expensesReducer,
  cart: cartsReducer
})

export default rootReducer;
