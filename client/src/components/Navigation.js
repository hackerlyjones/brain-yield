import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="row justify-content-center">
        <div className="col-6">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/newsletter">Newsletter</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;
