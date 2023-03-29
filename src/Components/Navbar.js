
import React from 'react'
import {Link, useLocation} from "react-router-dom";

const Navbar = ()=> {
  
let Location = useLocation();
  
    return (
        <nav className="navbar fixed-top navbar-dark navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">NewEEAAO</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"> <Link to="/" className={`nav-link ${Location.pathname==="/"?"active":""} `} aria-current="page">Home</Link> </li>
              <li className="nav-item"> <Link className={`nav-link ${Location.pathname==="/business"?"active":""} `} to="/business">Business</Link> </li>
              <li className="nav-item"> <Link className={`nav-link ${Location.pathname==="/entertainment"?"active":""} `} to="/entertainment">Entertainment</Link> </li>
              <li className="nav-item"> <Link className={`nav-link ${Location.pathname==="/general"?"active":""} `} to="/general">General</Link> </li>
              <li className="nav-item"> <Link className={`nav-link ${Location.pathname==="/health"?"active":""} `} to="/health">Health</Link> </li>
              <li className="nav-item"> <Link className={`nav-link ${Location.pathname==="/science"?"active":""} `} to="/science">Science</Link> </li>
              <li className="nav-item"> <Link className={`nav-link ${Location.pathname==="/sports"?"active":""} `} to="/sports">Sports</Link> </li>
              <li className="nav-item"> <Link className={`nav-link ${Location.pathname==="/technology"?"active":""} `} to="/technology">Technology</Link> </li>
              <li className="nav-item"> <Link className={`nav-link ${Location.pathname==="/weather"?"active":""} `} to="/weather">Weather</Link> </li>
              <li className="nav-item"> <Link className={`nav-link ${Location.pathname==="/metal"?"active":""} `} to="/metal">Metal</Link> </li>
            </ul>
          </div>
        </div>
      </nav>
    )
 
}

export default Navbar