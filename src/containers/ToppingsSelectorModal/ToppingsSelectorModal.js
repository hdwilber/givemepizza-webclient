import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

class ToppingsSelectorModal extends React.PureComponent {
  componentDidMount() {
    this.props.getToppings()
  }

  handleToggle = (topping, isSelected) => {
    const { pizza: { _id }, addTopping, removeTopping } = this.props
    if (isSelected) {
      addTopping(_id, topping._id)
    } else {
      removeTopping(_id, topping._id)
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
                const isSelected = pizza.toppings.find(t => t._id === _id)
                return (
                  <li className={isSelected ? styles.selected: ''}>
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
  pizza: PropTypes.object,
}
ToppingsSelectorModal.defaultProps = {
  toppings: [],
  selected: [],
}

export default ToppingsSelectorModal
