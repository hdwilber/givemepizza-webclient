import { types } from './actions'
const initialState = {
  list: {
    loading: false,
    loaded: false,
    data: [],
  },
  createPizza: null,
  deletePizza: null,
}

export default function pizzas(state = initialState, action) {
  switch (action.type) {
    case types.getPizzas[0]: {
      return {
        ...state,
        list: {
          loading: true,
          loaded: false,
        }
      }
    }
    case types.getPizzas[1]: {
      const { result } = action.payload
      return {
        ...state,
        list: {
          loading: false,
          loaded: true,
          data: result,
        }
      }
    }

    case types.getPizzas[2]: {
      const { error } = action.payload
      return {
        ...state,
        list: {
          loading: false,
          loaded: true,
          error,
        }
      }
    }

    case types.createPizza[0]: {
      return {
        ...state,
        createPizza: {
          loading: true,
          loaded: false,
        }
      }
    }

    case types.createPizza[1]: {
      const { result } = action.payload
      return {
        ...state,
        createPizza: {
          loading: false,
          loaded: true,
          data: result,
        }
      }
    }

    case types.createPizza[2]: {
      const { error } = action.payload
      return {
        ...state,
        createPizza: {
          loading: false,
          loaded: true,
          error,
        }
      }
    }

    case types.deletePizza[0]: {
      return {
        ...state,
        deletePizza: {
          loading: true,
          loaded: false,
        }
      }
    }

    case types.deletePizza[1]: {
      const { result } = action.payload
      return {
        ...state,
        deletePizza: {
          loading: false,
          loaded: true,
          data: result,
        }
      }
    }

    case types.deletePizza[2]: {
      const { error } = action.payload
      return {
        ...state,
        deletePizza: {
          loading: false,
          loaded: true,
          error,
        }
      }
    }

    default:
      return state
  }
}
