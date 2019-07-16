import { connect } from 'react-redux'
import * as pizzasActions from '../../redux/pizzas/actions'
import _get from 'lodash/get'
import Pizzas from './Pizzas'

function mapStateToProps(state) {
  const { pizzas } = state
  return {
    pizzas: _get(pizzas, 'list.data', [])
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPizzas: () => dispatch(pizzasActions.getPizzas()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pizzas)
