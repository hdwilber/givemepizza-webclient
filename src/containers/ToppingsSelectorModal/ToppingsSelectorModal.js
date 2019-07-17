import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import _debounce from 'lodash/debounce'

class ToppingsSelectorModal extends React.PureComponent {
  componentDidMount() {
    this.props.getToppings()
  }

  handleToggle = _debounce((topping, isSelected) => {
    const { pizzaId, addTopping, removeTopping } = this.props
    if (!isSelected) {
      addTopping(pizzaId, topping._id)
    } else {
      removeTopping(pizzaId, topping._id)
    }
  }, 500)

  render() {
    const { toppings, pizza, onClose } = this.props
    if (pizza) {
      return (
        <div className={styles.layer}>
          <div className={styles.modal}>
            <h2>Select toppings for: { pizza.name } </h2>
            { toppings.map(topping => {
              const { name, _id } = topping
              console.log(topping)
              const isSelected = pizza.toppings.find(t => t._id === _id)
              return (
                <div key={_id} >
                  <input id={_id} type="checkbox" className={isSelected ? styles.selected: ''}
                    onChange={() => this.handleToggle(topping, isSelected)}
                    checked={!!isSelected}
                  />
                  <label htmlFor={_id}>{ name }</label>
                </div>
              )
              })
            }
            { toppings.length === 0 && (<p>No toppings available. Create ones</p>) }
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
