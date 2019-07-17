import { types } from './actions'
const initialState = {
  requests: [],
  show: true,
}

export default function status(state = initialState, action) {
  switch(action.type) {
    case types.addRequest: {
      const { info } = action.payload
      const { requests } = state
      return {
        ...state,
        //requests: [{
          //...info,
          //name: `[${requests.length +1}] ${info.name}`,
        //}].concat(requests),
        requests: [{
          ...info,
          name: `[${requests.length +1}] ${info.name}`,
        }]
      }
    }
    default: {
      return state
    }
  }
}

