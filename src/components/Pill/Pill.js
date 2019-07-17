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
          className={styles.remove}
          onClick={onRemove}
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
