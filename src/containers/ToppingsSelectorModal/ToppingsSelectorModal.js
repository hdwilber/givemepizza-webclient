import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

class ToppingsSelectorModal extends React.PureComponent {
  componentDidMount() {
    this.props.getToppings()
  }

  handleToggle = (topping, isSelected) => {
    const { pizzaId, addTopping, removeTopping } = this.props
    if (!isSelected) {
      addTopping(pizzaId, topping._id)
    } else {
      removeTopping(pizzaId, topping._id)
    }
  }

  render() {
    const { toppings, pizza, onClose } = this.props
    if (pizza) {
      return (
        <div className={styles.modal}>
          <div>
            <ul>
              { toppings.map(topping => {
                const { name, _id } = topping
                console.log(topping)
                const isSelected = pizza.toppings.find(t => t._id === _id)
                return (
                  <li key={_id} className={isSelected ? styles.selected: ''}>
                    <button onClick={() => this.handleToggle(topping, isSelected)}>{ name }</button>
                  </li>
                )
                })
              }
            </ul>
            <button onClick={onClose}>Done</button>
          </div>
        </div>
      )
    }
    return null
  }
}

ToppingsSelectorModal.propTypes = {
  toppings: PropTypes.array,
  pizzaId: PropTypes.string,
  pizza: PropTypes.object,
}
ToppingsSelectorModal.defaultProps = {
  toppings: [],
  selected: [],
}

export default ToppingsSelectorModal
