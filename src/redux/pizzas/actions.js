export const types = {
  getPizzas: ['GET_PIZZAS',
    'GET_PIZZAS_SUCCESS',
    'GET_PIZZAS_FAILED',
  ],
  getPizza: ['GET_PIZZA',
    'GET_PIZZA_SUCCESS',
    'GET_PIZZA_FAILED',
  ],
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
