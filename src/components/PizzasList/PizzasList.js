import React from 'react'
import PropTypes from 'prop-types'
import Pizza from '../Pizza'
import Pill from '../Pill'
import styles from './styles.module.css'

class PizzasList extends React.PureComponent {
  render() {
    const { items, onRemoveItem } = this.props
    //const items = oItems.map(a => {
      //return {
        //...a,
        //toppings: [
          //{
            //name: 'PEacock',
          //}
        //]
      //}
    //})
    return (
      <ul className={styles.list}>
        { items.map(item => {
          const { _id, toppings, name } = item
          const toppingsString = toppings.map(top => top.name).join(',')
          return (
            <li key={_id}>
              {name}
              - Toppings:
              { toppings.map(topping => <Pill text={topping.name} />)}

              <button onClick={e => { onRemoveItem(item) }}>delete</button>
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
