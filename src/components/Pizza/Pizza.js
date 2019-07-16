import PropTypes from 'prop-types'

function Pizza(props) {
  const { name, toppings, key } = props
  const toppingsString = toppings.map(top => top.name).join(',')
  return (
    <p key={key}>
      <span>{ name }</span>
      - Toppings:
      { toppingsString }
    </p>
  )
}

Pizza.propTypes = {
  name: PropTypes.string,
  toppings: PropTypes.array,
}

Pizza.defaultProps = {
  toppings: [],
}

export default Pizza
