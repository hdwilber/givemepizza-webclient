import React from 'react'
import { mount } from 'enzyme'
import PizzasList from '../PizzasList'
import Pill from '../../Pill'

function setupProps() {
  return {
    items: [
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
    onRemoveItem: jest.fn(),
    onRemoveTopping: jest.fn(),
    onClickItem: jest.fn(),
  }
}

function setup(props) {
  return mount(<PizzasList {...props} />)
}

describe('<PizzasList />', () => {
  let props
  let wrapper

  beforeEach(() => {
    props = setupProps()
    wrapper = setup(props)
  })
  it('should match snapshot', () => {
    expect(<PizzasList {...props} />).toMatchSnapshot()
  })

  it('should render correctly all pizzas', () => {
    const listWrapper = wrapper.find('.list')
    expect(listWrapper.children().length).toEqual(props.items.length)
  })

  it('should call onClickItem when user clicks in the item', () => {
    const index = 0
    const itemWrapper = wrapper.find('li').at(index)
    itemWrapper.simulate('click')
    expect(props.onClickItem).toHaveBeenCalledTimes(1)
    expect(props.onClickItem).toHaveBeenCalledWith(props.items[index])
  })

  it('should call onRemoveItem when user click the remove button', () => {
    const index = 0
    const itemWrapper = wrapper.find('li').at(index)
    const removeButtonWrapper = itemWrapper.find('button')
    removeButtonWrapper.simulate('click', { 
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    })
    expect(props.onRemoveItem).toHaveBeenCalledTimes(1)
  })

  it('should call onRemoveTopping when a topping exists and user clicks in the remove icon of the pill', () => {
    const pillWrapper = wrapper.find(Pill).at(0)
    const removeWrapper = pillWrapper.find('.remove')
    removeWrapper.simulate('click')
    expect(props.onRemoveTopping).toHaveBeenCalledTimes(1)
    expect(props.onRemoveTopping).toHaveBeenCalledWith(props.items[0], props.items[0].toppings[0])
  })
})

