import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    
        
        <nav className="navbar navbar-expand-lg "  >
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#">GUVI BLOG</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link btn btn-success" to='/'> ALL </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link btn btn-success" to='/fullstackdev'> FULL STACK DEVELOPMENT </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link btn btn-success" to='/datascience'> DATASCIENCE </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link btn btn-success" to='/cybersecurity'> CYBERSECURITY </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link btn btn-success" to='/career'> CAREER </Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Nav