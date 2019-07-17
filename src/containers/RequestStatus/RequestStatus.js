import React from 'react'
import RequestStatusComponent from '../../components/RequestStatus'

class RequestStatus extends React.PureComponent {
  render() {
    const { show, list } = this.props
    if(show) {
      return (
        <RequestStatusComponent requestsList={list} />
      )
    }
    return null
  }
}

export default RequestStatus
