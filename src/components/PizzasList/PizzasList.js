import React from 'react'
import PropTypes from 'prop-types'
import Pizza from '../Pizza'

class PizzasList extends React.PureComponent {
  render() {
    const { items } = this.props
    return (
      <ul>
        { items.map(item => {
          return (
            <Pizza {...item} />
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
