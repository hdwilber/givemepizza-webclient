import { combineReducers } from 'redux'
import pizzasReducer from './pizzas/reducer'
import statusReducer from './status/reducer'
import toppingsReducer from './toppings/reducer'

export default combineReducers({
  pizzas: pizzasReducer,
  status: statusReducer,
  toppings: toppingsReducer,
})
