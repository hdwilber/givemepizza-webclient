import React from 'react'
import PropTypes from 'prop-types'
import TopBar from '../components/TopBar'
import Pizzas from './Pizzas'
import Toppings from './Toppings'
import RequestStatus from './RequestStatus'
import { Pages } from '../constants'
import { connect } from 'react-redux'
import { setPage } from '../redux/app/actions'

class GiveMePizza extends React.PureComponent {
  handleTopBarSelect = page => {
    this.props.changePage(page)
  }
  render() {
    const { page } = this.props
    return (
      <div className="pizza">
        <TopBar onSelect={this.handleTopBarSelect}
          current={page}
        />
          { page === Pages.pizzas && <Pizzas /> }
          { page === Pages.toppings && <Toppings /> }
        <RequestStatus />
      </div>
    )
  }
}
export default connect(
  state => ({
    page: state.app.page,
  }),
  dispatch => ({
    changePage: page => dispatch(setPage(page)),
  })
)(GiveMePizza)

GiveMePizza.propTypes = {
  page: PropTypes.number,
  changePage: PropTypes.func,
}

