const { REACT_APP_API_URL } = process.env 

export async function getAllPizzas() {
  const response = await fetch(`${REACT_APP_API_URL}/pizzas`)
  if (response.ok) {
    const result = await response.json()
    return result.pizzas
  }
  throw new Error('Not able to fetch list of pizzas')
}

export async function getPizzaById(id) {
  const response = await fetch(`${REACT_APP_API_URL}/pizzas/${id}`)
  if (response.ok) {
    return response.json()
  }
  throw new Error('Not able to fetch list of pizzas')
}

export async function createPizza(data) {
  const headers = new Headers()
  headers.append('content-type', 'application/json')
  const response = await fetch(`${REACT_APP_API_URL}/pizzas`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers,
  })
  if (response.ok) {
    const result = await response.json()
    return result.toppings
  }
  throw new Error('Not able to create a new pizza')
}


