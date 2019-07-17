import { types } from './actions'
const initialState = {
  list :{
    loading: false,
    loaded: false,
    data: [],
  },
  createTopping: null,
  deleteTopping: null,
}

export default function toppings(state = initialState, action) {
  switch(action.type) {
    case types.getToppings[0]: {
      return {
        ...state,
        list: {
          loading: true,
          loaded: false,
        }
      }
    }
    case types.getToppings[1]: {
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

    case types.getToppings[2]: {
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
    case types.createTopping[0]: {
      return {
        ...state,
        createTopping: {
          loading: true,
          loaded: false,
        }
      }
    }

    case types.createTopping[1]: {
      const { result } = action.payload
      return {
        ...state,
        createTopping: {
          loading: false,
          loaded: true,
          data: result,
        }
      }
    }

    case types.createTopping[2]: {
      const { error } = action.payload
      return {
        ...state,
        createTopping: {
          loading: false,
          loaded: true,
          error,
        }
      }
    }

    case types.deleteTopping[0]: {
      return {
        ...state,
        deleteTopping: {
          loading: true,
          loaded: false,
        }
      }
    }

    case types.deleteTopping[1]: {
      const { result } = action.payload
      return {
        ...state,
        deleteTopping: {
          loading: false,
          loaded: true,
          data: result,
        }
      }
    }

    case types.deleteTopping[2]: {
      const { error } = action.payload
      return {
        ...state,
        deleteTopping: {
          loading: false,
          loaded: true,
          error,
        }
      }
    }

    default: return state
  }
}
