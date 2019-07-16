import React from 'react'
import PropTypes from 'prop-types'
import { PizzasList } from '../../components'

class Pizzas extends React.PureComponent {
  componentDidMount() {
    this.props.getPizzas()
  }
  render() {
    const { pizzas } = this.props
    return (
      <div>
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
