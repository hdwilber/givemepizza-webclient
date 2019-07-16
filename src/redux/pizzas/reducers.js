import { types } from './actions'
const initialState = {
  list: {
    loading: false,
    loaded: false,
    data: [],
  }
}

export default function pizzas(state = initialState, action) {
  switch (action.type) {
    case types.getPizzas[0]:
      return {
        ...state,
        list: {
          loading: true,
          loaded: false,
        }
      }
    case types.getPizzas[1]:
      const { result } = action.payload
      return {
        ...state,
        list: {
          loading: false,
          loaded: true,
          data: result,
        }
      }

    case types.getPizzas[2]:
      const { error } = action.payload
      return {
        ...state,
        list: {
          loading: false,
          loaded: true,
          error,
        }
      }

    default:
      return state
  }
}
