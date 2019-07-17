import { connect } from 'react-redux'
import Toppings from './Toppings'
import _get from 'lodash/get'
import * as toppingsActions from '../../redux/toppings/actions'


function mapStateToProps(state) {
  return {
    toppings: _get(state, 'toppings.list.data', [])
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getToppings: () => dispatch(toppingsActions.getToppings()),
    createTopping: data => dispatch(toppingsActions.createTopping(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Toppings)
