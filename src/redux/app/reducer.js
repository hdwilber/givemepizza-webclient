import { Pages } from '../../constants'
import { types } from './actions'

const initialState = {
  page: Pages.pizzas,
}

export default function (state = initialState, action) {
  if (action.type === types.setPage) {
    const { page } = action.payload
    return {
      ...state,
      page,
    }
  }
  return state
}
