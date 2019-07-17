import React from 'react'
import styles from './styles.module.css'

class Toppings extends React.PureComponent {
  state = {
    newTopping: '',
  }
  componentDidMount() {
    this.props.clear()
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
    const { toppings, errors } = this.props
    const { newTopping } = this.state
    return (
      <div>
        <h1>Toppings</h1>
        <form onSubmit={this.handleSubmit}>
          <h2>
            Create a new Topping
          </h2>
          <input value={newTopping} name="newTopping" onChange={this.handleChange} />
          { errors && errors.name && <span className={styles.validationError}>{ errors.name }</span> }
          <button type="submit">Create</button>
        </form>
        <h2>Current available toppings:</h2>
        { !toppings.length && <p>There are not toppings</p> }
        { !!toppings.length && (
          <ul>
            { toppings.map(topping => {
              const { _id, name } = topping
              return (
                <li key={_id}>
                  {name}
                  <button onClick={() => this.handleDeleteClick(topping)}>X</button>
                </li>
              )
              })
            }
          </ul>
        )}
      </div>
    )
  }
}

export default Toppings
