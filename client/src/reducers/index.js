import { combineReducers } from 'redux'
import { itemsReducer } from './itemsReducer'
import { expensesReducer } from './expensesReducer'
import { currentCartReducer } from './currentCartReducer'
import { cartsReducer } from './cartsReducer'
import { salesReducer } from './salesReducer'
import { showsReducer } from './showsReducer'
import { dataReducer } from './dataReducer'
import { totalsReducer } from './totalsReducer'
import { globalReducer } from './globalReducer'

const rootReducer = combineReducers({
  items: itemsReducer,
  expenses: expensesReducer,
  currentCart: currentCartReducer,
  carts: cartsReducer,
  sales: salesReducer,
  shows: showsReducer,
  data: dataReducer,
  totals: totalsReducer,
  global: globalReducer
})

export default rootReducer;
