import { combineReducers } from 'redux'
import pizzasReducer from './pizzas/reducers'

export default combineReducers({
  pizzas: pizzasReducer,
})
