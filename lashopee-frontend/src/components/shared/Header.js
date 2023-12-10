import React from "react";
import { APP_NAME } from "../../configs/AppConfig";
import { Link } from "react-router-dom";

const Header = props => {

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand" href="#">{APP_NAME}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/cart" className="nav-link active" aria-current="page" href="#">cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};


export default  Header;