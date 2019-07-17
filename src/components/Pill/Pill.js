import React from 'react'
import PropTypes from 'prop-types'
import _noop from 'lodash/noop'
import styles from './styles.module.css'

class Pill extends React.PureComponent {
  render() {
    const { text, onRemove } = this.props
    return (
      <div className={styles.pill}>
        <span>{ text }</span>
        <span 
          title="remove"
          className={styles.remove}
          onClick={e => {
            e.preventDefault()
            e.stopPropagation()
            onRemove()
          }}
        >
          x
        </span>
      </div>
    )
  }
}
Pill.propTypes = { 
  text: PropTypes.string,
  onRemove: PropTypes.func,
}

Pill.defaultProps = {
  onRemove: _noop,
}

export default Pill
