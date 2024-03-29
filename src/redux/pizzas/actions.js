import { generateActionTypes } from '../utils'

export const types = generateActionTypes([
  'getPizzas',
  'getPizza',
  'createPizza',
  'deletePizza',
  'addTopping',
  'removeTopping',
])
types.createPizzaClear = 'CREATE_PIZZA_CLEAR'

export function createPizzaClear() {
  return {
    type: types.createPizzaClear,
  }
}

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

export function removeTopping(pizzaId, toppingId) {
  return {
    type: types.removeTopping[0],
    payload: {
      pizzaId,
      toppingId,
    }
  }
}
