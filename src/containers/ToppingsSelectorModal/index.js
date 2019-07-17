import { connect } from 'react-redux'
import _get from 'lodash/get'
import ToppingsSelectorModal from './ToppingsSelectorModal'
import * as pizzasActions from '../../redux/pizzas/actions'
import * as toppingsActions from '../../redux/toppings/actions'
import { setPage } from '../../redux/app/actions'
import { Pages } from '../../constants'

function mapStateToProps(state, { pizzaId }) {
  return {
    toppings: _get(state, 'toppings.list.data', []),
    pizza: _get(state, 'pizzas.list.data').find(pizza => pizza._id === pizzaId),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getToppings: () => dispatch(toppingsActions.getToppings()),
    addTopping: (pizzaId, toppingId) => dispatch(pizzasActions.addTopping(pizzaId, toppingId)),
    removeTopping: (pizzaId, toppingId) => dispatch(pizzasActions.removeTopping(pizzaId, toppingId)),
    goToToppingsPage: () => dispatch(setPage(Pages.toppings)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToppingsSelectorModal)
