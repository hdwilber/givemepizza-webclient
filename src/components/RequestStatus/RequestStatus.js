import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

export const messages = {
  done: 'Request successful',
  wrong: 'Something went wrong',
  loading: 'Loading request',
  notStarted: 'Request not started',
}
function parseStatus(status) {
  if (status) {
    const { loading, loaded, error } = status
    if (!loading && loaded) {
      if (error) {
        return messages.wrong
      }
      return messages.done
    }
    if (loading) {
      return messages.loading
    }
  }
  return messages.notStarted
}
class RequestStatus extends React.PureComponent {
  render() {
    const { requestsList } = this.props

    return (
      <div className={styles.status}>
        { requestsList.map(request => {
            const { name, status } = request
            return (
              <p key={name}>
                <b>{name}</b>&nbsp;
                { parseStatus(status) }
              </p>
            )
          })
        }
      </div>
    )
  }
}

RequestStatus.propTypes = {
  requestsList: PropTypes.array,
}
RequestStatus.defaultProps = {
  requestsList: [],
}

export default RequestStatus
