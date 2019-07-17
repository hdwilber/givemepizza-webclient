import { connect } from 'react-redux'
import Toppings from './Toppings'
import _get from 'lodash/get'
import * as toppingsActions from '../../redux/toppings/actions'


function mapStateToProps(state) {
  return {
    toppings: _get(state, 'toppings.list.data', []),
    errors: _get(state, 'toppings.createTopping.error.result.errors', null),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getToppings: () => dispatch(toppingsActions.getToppings()),
    createTopping: data => dispatch(toppingsActions.createTopping(data)),
    deleteTopping: id => dispatch(toppingsActions.deleteTopping(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Toppings)
