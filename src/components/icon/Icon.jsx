import React from 'react'
import PropTypes from 'prop-types'
import * as icons from './icons'
import './icon.scss'

/**
 * Icon
 */
const Icon = ({ name, size = 'small' }) => {
  const { viewBox, id } = icons[name]
  return (
    <span className={`icon icon--${size}`}>
      <svg viewBox={viewBox}>
        <use xlinkHref={`#${id}`} href={`#${id}`} />
      </svg>
    </span>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}

export default Icon
