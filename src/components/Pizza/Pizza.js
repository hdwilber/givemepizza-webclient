import PropTypes from 'prop-types'

export default function Pizza(props) {
  const { name, toppings } = props
  const toppingsString = toppings.map(top => top.name).join(',')
  return (
    <p>
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

