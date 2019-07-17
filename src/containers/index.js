import React from 'react'
import PropTypes from 'prop-types'
import TopBar from '../components/TopBar'
import Pizzas from './Pizzas'
import Toppings from './Toppings'
import RequestStatus from './RequestStatus'
import { Pages } from '../constants'

class GiveMePizza extends React.PureComponent {
  state = {
    page: Pages.pizzas,
  }

  handleTopBarSelect = page => {
    this.setState({
      page,
    })
  }
  render() {
    const { page } = this.state
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
export default GiveMePizza
