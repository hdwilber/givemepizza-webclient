import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import _debounce from 'lodash/debounce'
import _noop from 'lodash/noop'

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

  handleKeyDown = e => {
    const { onClose } = this.props
    if(e.key === 'Escape') {
      e.preventDefault()
      onClose()
    }
  }
  handleContainerRef = ref => {
    if (ref) {
      ref.focus()
    }
  }
  render() {
    const { toppings, pizza, onClose } = this.props
    if (pizza) {
      return (
        <div className={styles.layer} tabIndex="-1" onKeyDown={this.handleKeyDown} ref={this.handleContainerRef}>
          <div className={styles.modal}>
            <h2>Select toppings for: { pizza.name } </h2>
            { toppings.map(topping => {
              const { name, _id } = topping
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
            { !toppings.length && (<p>No toppings available. Create ones</p>) }
            <div className={styles.actions}>
              { !toppings.length && (
                <button onClick={() => this.props.goToToppingsPage()}>Toppings Page</button>
              )}
              <button onClick={onClose}>Close</button>
            </div>
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
  goToToppingsPage: PropTypes.func,
}
ToppingsSelectorModal.defaultProps = {
  toppings: [],
  selected: [],
  goToToppingsPage: _noop,
}

export default ToppingsSelectorModal
