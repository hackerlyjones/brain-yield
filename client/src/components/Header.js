import React from "react";
import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <div className="row">
      <h1 className="text-center">{title}</h1>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string
}
Header.defaultProps = {
  title: 'Brain Yield'
}

export default Header;
