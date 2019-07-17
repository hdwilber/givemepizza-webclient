import React from 'react'
import PropTypes from 'prop-types'
import { PizzasList } from '../../components'

class Pizzas extends React.PureComponent {
  state = {
    newPizza: '',
  }

  componentDidMount() {
    this.props.getPizzas()
  }

  handleSubmit = e => { 
    e.preventDefault()
    const { newPizza } = this.state
    this.props.createPizza({
      name: newPizza,
    })
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  handleListRemoveItem = pizza => {
    console.log('Request remotion of pizza: %o', pizza);

  }

  render() {
    const { pizzas } = this.props
    const { newPizza } = this.state
    return (
      <div>
        <h1>Pizzas</h1>
        <form onSubmit={this.handleSubmit}>
          <h2>
            Create a new Pizza
          </h2>
          <input value={newPizza} name="newPizza" onChange={this.handleChange} />
          <button type="submit">Create</button>
        </form>
        <h2>Current available Pizzas</h2>
        <PizzasList items={pizzas}
          onRemoveItem={this.handleListRemoveItem}
        />
      </div>
    )
  }
}

Pizzas.propTypes = {
  pizzas: PropTypes.array,
  getPizzas: PropTypes.func,
}

Pizzas.defaultProps = {
  pizzas: [],
}

export default Pizzas
