import { generateActionTypes } from '../utils'

export const types = generateActionTypes([
  'getPizzas',
  'getPizza',
  'createPizza',
])

export function getPizzas() {
  return {
    type: types.getPizzas[0],
    payload: {},
  }
}

export function getPizza(id) {
  return {
    type: types.getPizza[0],
    pizzaId: id,
  }
}

export function createPizza(data) {
  return {
    type: types.createPizza[0],
    payload: {
      data,
    }
  }
}
