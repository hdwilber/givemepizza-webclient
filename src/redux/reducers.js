import { combineReducers } from 'redux'
import appReducer from './app/reducer'
import pizzasReducer from './pizzas/reducer'
import statusReducer from './status/reducer'
import toppingsReducer from './toppings/reducer'

export default combineReducers({
  app: appReducer,
  pizzas: pizzasReducer,
  status: statusReducer,
  toppings: toppingsReducer,
})
