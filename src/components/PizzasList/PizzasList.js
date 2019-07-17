import React from 'react'
import PropTypes from 'prop-types'
import Pizza from '../Pizza'
import Pill from '../Pill'
import styles from './styles.module.css'

class PizzasList extends React.PureComponent {
  render() {
    const { items, onRemoveTopping, onRemoveItem, onClickItem } = this.props
    return (
      <ul className={styles.list}>
        { items.map(item => {
          const { _id, toppings, name } = item
          const toppingsString = toppings.map(top => top.name).join(',')
          return (
            <li key={_id} >
              <span onClick={e => { onClickItem(item) }}>
                {name}
                - Toppings:
                { toppings.length > 0
                    ? toppings.map(topping => <Pill key={topping._id} text={topping.name}
                      onRemove={() => onRemoveTopping(item, topping)}
                      />)
                    : '0 selected'
                }
              </span>

              <button onClick={e => { e.preventDefault(); onRemoveItem(item) }}>delete</button>
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
