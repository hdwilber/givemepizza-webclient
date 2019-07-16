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

  render() {
    const { pizzas } = this.props
    const { newPizza } = this.state
    return (
      <div>
        <section>
          <h1>
            Create a new Pizza
          </h1>
          <form onSubmit={this.handleSubmit}>
            <input value={newPizza} name="newPizza" onChange={this.handleChange} />
            <button type="submit">Create</button>
          </form>
        </section>
        <PizzasList items={pizzas} />
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
