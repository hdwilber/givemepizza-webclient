import React from 'react'
import { shallow, } from 'enzyme'
import PizzasComponent from '../Pizzas'

function setupProps() {
  return {
    clear: jest.fn(),
    getPizzas: jest.fn(),
    createPizza: jest.fn(),
    deletePizza: jest.fn(),
    removeTopping: jest.fn(),
    errors: {},
    pizzas: [
      {
        _id: '1',
        name: 'Pizza 1',
        toppings: [{
          _id: 'pill-1',
          name: 'Simple Topping',
        }],
      },
      {
        _id: '2',
        name: 'Pizza 2',
        toppings: [],
      },
      {
        _id: '3',
        name: 'Pizza 3',
        toppings: [],
      },
    ],
  }
}

function setup(props) {
  return shallow(<PizzasComponent {...props} />)
}

describe('<PizzasComponent />', () => {
  let props
  let wrapper

  describe('Pizzas array with length greather than 0', () => {
    beforeEach(() => {
      props = setupProps()
      wrapper = setup(props)
    })
    it('should match snapshot', () => {
      expect(<PizzasComponent {...props} />).toMatchSnapshot()
    })

    it('should call the initial methods after mount', () => {
      expect(props.clear).toHaveBeenCalledTimes(1)
      expect(props.getPizzas).toHaveBeenCalledTimes(1)
    })

    it('should try to create a new Pizza when submitting th eform data', () => {
      const name = 'This is my pizza'
      wrapper.setState({
        newPizza: name,
      })
      const formWrapper = wrapper.find('form')
      formWrapper.simulate('submit', {
        preventDefault: jest.fn(),
      })
      expect(props.createPizza).toHaveBeenCalledTimes(1)
      expect(props.createPizza).toHaveBeenCalledWith({ name })
    })
    it('should render PizzasList component when pizzas length is greater than 0', () => {
      expect(wrapper.find('PizzasList').length).toEqual(1)
    })

    it('should call onRemoveItem when user clicks remove button from PizzasList component', () => {
      const pizzasListWrapper = wrapper.find('PizzasList')
      pizzasListWrapper.simulate('removeItem', props.pizzas[0])
      expect(props.deletePizza).toHaveBeenCalledTimes(1)
    })
    it('should clear selectedPizza and set showToppingsSelector as false when handleToppingsSelectorClose is called', () => {

      const pizzasListWrapper = wrapper.find('PizzasList')
      pizzasListWrapper.simulate('clickItem', props.pizzas[0])
      wrapper.instance().handleToppingsSelectorClose()
      expect(wrapper.state('showToppingsSelector')).toBeFalsy()
      expect(wrapper.state('selectedPizza')).toBeNull()
    })

    it('should call removeTopping correctly', () => {
      const pizzasListWrapper = wrapper.find('PizzasList')
      pizzasListWrapper.simulate('removeTopping', props.pizzas[0], props.pizzas[0].toppings[0])
      expect(props.removeTopping).toHaveBeenCalledTimes(1)
    })

    it('should update the newPizza state value when user types in the input field', () => {
      const value = 'Simple value for pizza'
      const inputWrapper = wrapper.find('input')
      inputWrapper.simulate('change', {
        target: {
          name: 'newPizza',
          value,
        }
      })
      expect(wrapper.state('newPizza')).toEqual(value)
    })
  })
  describe('Pizzas array with length greather than 0', () => {
    beforeEach(() => {
      props = setupProps()
      props.pizzas = []
      wrapper = setup(props)
    })
    it('should not render PizzasList component', () => {
      expect(wrapper.find('PizzasList').length).toEqual(0)
    })
  })
  describe('Errors in the form', () => {
    beforeEach(() => {
      props = setupProps()
      props.pizzas = []
      props.errors = {
        name: 'Invalid value', 
      }
      wrapper = setup(props)
    })
    it('should render error message', () => {
      const errorMessageWrapper = wrapper.find('form').find('span')
      expect(errorMessageWrapper.text()).toEqual(props.errors.name)
    })
  })
  describe('Show Toppings Selector modal', () => {
    beforeEach(() => {
      props = setupProps()
      wrapper = setup(props)
    })

    it('should render ToppingSelectorModal when user clicks on any item of PizzasList', () => {
      const pizzasListWrapper = wrapper.find('PizzasList')
      pizzasListWrapper.simulate('clickItem', props.pizzas[0])
      expect(wrapper.state('showToppingsSelector')).toBeTruthy()
      expect(wrapper.state('selectedPizza')).toEqual(props.pizzas[0])
    })
  })

})
