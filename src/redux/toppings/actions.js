import { generateActionTypes } from '../utils'
export const types = generateActionTypes([
  'getToppings',
  'addTopping',
  'deleteTopping',
])

export function getToppings() {
  return {
    type: types.getToppings[0],
    payload: {},
  }
}

export function addTopping(data) {
  return {
    type: types.addTopping[0],
    payload: {
      data,
    }
  }
}

export function deleteTopping(id) {
  return {
    type: types.deleteTopping[0],
    payload: {
      toppingId: id,
    }
  }
}
