export async function getAllPizzas() {
  const response = await fetch('http://localhost:3100/api/pizzas')
  if (response.ok) {
    const result = await response.json()
    return result.pizzas
  }
  throw new Error('Not able to fetch list of pizzas')
}

export async function getPizzaById(id) {
  const response = await fetch('http://localhost:3100/api/pizzas/' +id)
  if (response.ok) {
    return response.json()
  }
  throw new Error('Not able to fetch list of pizzas')
}
