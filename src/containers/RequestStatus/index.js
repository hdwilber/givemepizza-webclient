import { connect } from 'react-redux'
import _get from 'lodash/get'
import RequestStatus from './RequestStatus'

function mapStateToProps(state) {
  const { status: { show, requests } } = state
  return {
    list: requests.map(info => {
      const { path, name, description } = info
      return {
        status: _get(state, path, null),
        name,
        description,
      }
    }),
    show,
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps) (RequestStatus)
