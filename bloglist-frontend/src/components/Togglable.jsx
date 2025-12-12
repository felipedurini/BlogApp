import { useState, forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import './togglable.css'

const Togglable = forwardRef((props, refs) => {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(refs, () => ({
    toggleVisibility
  }))

  return (
    <div className="togglable-wrapper">
      {!visible && (
        <button className="togglable-button" onClick={toggleVisibility}>
          {props.buttonLabel}
        </button>
      )}

      {visible && (
        <div className="togglable-content">
          {props.children}

          <button
            className="togglable-button"
            style={{ marginTop: '14px' }}
            onClick={toggleVisibility}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  )
})

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

Togglable.displayName = 'Togglable'

export default Togglable
