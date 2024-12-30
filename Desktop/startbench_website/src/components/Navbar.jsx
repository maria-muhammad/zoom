import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   <div className='container-fluid nav_bg'>
  <div className='row'>
  <div className='col-12 col-lg-12 mx-auto'>
  <nav className="navbar navbar-expand-lg bg-light navbar-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to='/'>Startbench</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink 
          className="nav-link" 
           aria-current="page"
            to='/' 
            activeClassName ="menu_active"
            >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to='/about'>About Us</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" aria-current="page" to='/service'>Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to='/contact'>Contact Us</NavLink>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
  </div>
</div>
</div>

   </>
  )
}

export default Navbar;
