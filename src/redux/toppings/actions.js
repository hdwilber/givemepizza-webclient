import { generateActionTypes } from '../utils'
export const types = generateActionTypes([
  'getToppings',
  'createTopping',
  'deleteTopping',
])

export function getToppings() {
  return {
    type: types.getToppings[0],
    payload: {},
  }
}

export function createTopping(data) {
  return {
    type: types.createTopping[0],
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
