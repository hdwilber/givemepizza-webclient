import React from 'react'

class Toppings extends React.PureComponent {
  state = {
    newTopping: '',
  }
  componentDidMount() {
    this.props.getToppings()
  }

  handleSubmit = e => { 
    e.preventDefault()
    const { newTopping } = this.state
    this.props.createTopping({
      name: newTopping,
    })

    this.setState({
      newTopping: '',
    })
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  handleDeleteClick = ({_id}) => {
    const { deleteTopping } = this.props
    deleteTopping(_id)
  }

  render() {
    const { toppings } = this.props
    const { newTopping } = this.state
    return (
      <div>
        <h1>Toppings</h1>
        <form onSubmit={this.handleSubmit}>
          <h2>
            Create a new Topping
          </h2>
          <input value={newTopping} name="newTopping" onChange={this.handleChange} />
          <button type="submit">Create</button>
        </form>
        <h2>Current available toppings</h2>
        <ul>
          { toppings.map(topping => {
            const { name } = topping
            return (
              <li>
                {name}
                <button onClick={() => this.handleDeleteClick(topping)}>X</button>
              </li>
            )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Toppings
