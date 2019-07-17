import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

function parseStatus(status) {
  if (status) {
    const { loading, loaded, data, error } = status
    if (!loading && loaded) {
      if (error) {
        return 'Something went wrong'
      }
      return 'Done'
    }
    if (loading) {
      return 'loading'
    }
  }
  return 'not loaded'
}
class RequestStatus extends React.PureComponent {
  render() {
    const { requestsList } = this.props

    return (
      <div className={styles.status}>
        { requestsList.map(request => {
            const { name, description, status } = request
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
