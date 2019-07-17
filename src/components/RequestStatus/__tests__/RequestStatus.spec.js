import React from 'react'
import { mount } from 'enzyme'
import RequestStatus, { messages } from '../RequestStatus'

function setupProps() {
  return {
    requestsList: [
      {
        name: 'Some loading request',
        status: {
          loading: true,
          loaded: false,
        }
      },
      {
        name: 'Some correctly loaded request',
        status: {
          loading: false,
          loaded: true,
          data: {},
        }
      },
      {
        name: 'Some failing request',
        status: {
          loading: false,
          loaded: true,
          error: {
          }
        }
      },
      {
        name: 'Not loaded request',
        status: null,
      },
    ]
  }
}

function setup(props) {
  return mount(<RequestStatus {...props} />)
}

describe('<RequestStatus />', () => {
  let props
  let wrapper
  beforeEach(() => {
    props = setupProps()
    wrapper = setup(props)
  })

  it('should match snapshot', () => {
    expect(<RequestStatus {...props} />).toMatchSnapshot()
  })

  it('should render correctly the request information according to their status', () => {
    const requestsWrapper = wrapper.find('p')
    const texts = [messages.loading, messages.done, messages.wrong, messages.notStarted]
    texts.forEach((text, index) => {
      expect(requestsWrapper.at(index).text()).toMatch(text)
    })
  })
})
