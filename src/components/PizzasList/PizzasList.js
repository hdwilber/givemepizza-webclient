import React from 'react'
import PropTypes from 'prop-types'
import Pizza from '../Pizza'

class PizzasList extends React.PureComponent {
  render() {
    const { items } = this.props
    return (
      <ul>
        { items.map(item => {
          const { _id, toppings, name } = item
          const toppingsString = toppings.map(top => top.name).join(',')
          return (
            <li key={_id}>
              {name}
              - Toppings:
              { toppingsString }
            </li>
          )
        })
        }
      </ul>
    )
  }
}

PizzasList.propTypes = {
  items: PropTypes.array,
}

PizzasList.defaultProps = {
  items: [],
}

export default PizzasList
