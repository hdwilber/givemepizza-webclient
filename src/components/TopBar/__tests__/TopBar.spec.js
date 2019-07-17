import React from 'react'
import { mount } from 'enzyme'
import { Pages } from '../../../constants'
import TopBar from '../TopBar'

function setupProps() {
  return {
    onSelect: jest.fn(),
    current: Pages.pizzas,
  }
}

function setup(props) {
  return mount(<TopBar {...props} />)
}

describe('<TopBar />', () => {
  let props
  let wrapper
  beforeEach(() => {
    props = setupProps()
    wrapper = setup(props)
  })

  it('should match snapshot', () => {
    expect(<TopBar {...props} />).toMatchSnapshot()
  })

  it('should call onSelect when user clicks on any item', () => {
    const itemWrapper = wrapper.find('li').at(1)
    itemWrapper.simulate('click')
    expect(props.onSelect).toHaveBeenCalledTimes(1)
    expect(props.onSelect).toHaveBeenCalledWith(Pages.toppings)
  })
  it('should add the correct className when item is the current selected', () => {
    const itemWrapper = wrapper.find('li').at(0)
    expect(itemWrapper.prop('className')).toEqual('active')
  })
})


