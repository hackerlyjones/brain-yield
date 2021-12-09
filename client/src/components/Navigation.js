import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => {
  return (
    <navigation>
      <div className="row justify-content-center">
        <div className="col-4">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/newsletter">Newsletter</Link></li>
          </ul>
        </div>
      </div>
    </navigation>
  )
}

export default Navigation;
