import { generateActionTypes } from '../utils'

export const types = generateActionTypes([
  'getPizzas',
  'getPizza',
  'createPizza',
  'deletePizza',
  'addTopping',
  'removeTopping',
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

export function deletePizza(id) {
  return {
    type: types.deletePizza[0],
    payload: {
      pizzaId: id,
    }
  }
}

export function addTopping(pizzaId, toppingId) {
  return {
    type: types.addTopping[0],
    payload: {
      pizzaId,
      toppingId,
    }
  }
}

export function deleteTopping(pizzaId, toppingId) {
  return {
    type: types.deleteTopping[0],
    payload: {
      pizzaId,
      toppingId,
    }
  }
}
