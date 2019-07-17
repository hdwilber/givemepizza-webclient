import React from 'react'
import { mount } from 'enzyme'
import Pill from '../Pill'

function setupProps() {
  return {
    text: 'Pill example',
    onRemove: jest.fn(),
  }
}

function setup(props) {
  return mount(<Pill {...props} />)
}

describe('<Pill />', () => {
  let props
  let wrapper
  beforeEach(() => {
    props = setupProps()
    wrapper = setup(props)
  })
  it('should match snapshot', () => {
    const instance = <Pill {...props} />
    expect(instance).toMatchSnapshot()
  })
  it('should call onRemove when the X label is clicked', () => {
    const xWrapper = wrapper.find('span').at(1)
    xWrapper.simulate('click', { 
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    })
    expect(props.onRemove).toHaveBeenCalledTimes(1)
  })
  it('should render correctly the text', () => {
    const textWrapper = wrapper.find('span').at(0)
    expect(textWrapper.text()).toEqual(props.text)
  })
})
