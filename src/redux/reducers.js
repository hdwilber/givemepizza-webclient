import { combineReducers } from 'redux'
import pizzasReducer from './pizzas/reducer'
import statusReducer from './status/reducer'

export default combineReducers({
  pizzas: pizzasReducer,
  status: statusReducer,
})
