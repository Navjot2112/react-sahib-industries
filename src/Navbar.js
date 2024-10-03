import React from 'react'
import { Link } from 'react-router-dom';
 const Navbar=()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
  <h1 className="text-primary m-0"><i class="fa fa-map-marker-alt me-3"></i>Sahib </h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li class="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>

        <li class="nav-item">
          <Link className="nav-link active" aria-current="page" to="/services">Services</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/packages">Packages</Link>
        </li>

      
        <li className="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </Link>
          <ul class="dropdown-menu">
           <li><Link className="dropdown-item" to="/booking">Booking</Link></li>
            <li><Link className="dropdown-item" to="/page">404 Page</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
        </li>

        <li className="nav-item">
        <Link className="btn btn-primary rounded-pill py-2 px-4" to="/register">Register</Link>
        </li>

        
       

              </ul>
    </div>
  </div>
</nav>
        </>
    )
 }

 export default Navbar;