import { connect } from 'react-redux'
import * as pizzasActions from '../../redux/pizzas/actions'
import _get from 'lodash/get'
import Pizzas from './Pizzas'

function mapStateToProps(state) {
  const { pizzas } = state
  return {
    pizzas: _get(pizzas, 'list.data', []),
    errors: _get(pizzas, 'createPizza.error.result.errors', null),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPizzas: () => dispatch(pizzasActions.getPizzas()),
    createPizza: data => dispatch(pizzasActions.createPizza(data)),
    deletePizza: pizzaId => dispatch(pizzasActions.deletePizza(pizzaId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pizzas)
