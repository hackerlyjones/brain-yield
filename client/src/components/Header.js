import React from "react";
import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <header>
      <div className="row">
        <h1 className="text-center">{title}</h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string
}
Header.defaultProps = {
  title: 'Brain Yield'
}

export default Header;
