import React from "react";
import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <div className="row justify-content-center">
      <div className="col-6">
        <h1>{title}</h1>
      </div>
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
