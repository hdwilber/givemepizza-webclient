import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import { Pages } from '../../constants'

class TopBar extends React.PureComponent {
  render() {
    const { onSelect, current } = this.props
    return (
      <ul className={styles.menu}>
        <li
          className={Pages.pizzas === current ? styles.active: ''}
          onClick={() => onSelect(Pages.pizzas)}
        >
          Pizzas
        </li>
        <li 
          className={Pages.toppings === current ? styles.active: ''}
          onClick={() => onSelect(Pages.toppings)}
        >
          Toppings
        </li>
      </ul>
    )
  }
}
TopBar.propTypes = {
  onSelect: PropTypes.func,
  current: PropTypes.any,
}
export default TopBar

