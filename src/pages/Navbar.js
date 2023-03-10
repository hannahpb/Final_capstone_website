import React from 'react';
import { useNavigate, Link } from "react-router-dom";

function Navbar ()
{
  const history = useNavigate();
  function logout()
  {
    localStorage.clear();
    history("/")
  }
  
  return(
    <div className="pb-6">
        <nav className="navbar navbar-expand-lg bg-info">
        <div className="container">
          <Link className="navbar-brand" to="/" style={{color:'black', fontSize:25, fontFamily:'serif', fontWeight:'bold'}}>'Hippo-Campus'</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard" style={{color:'black', fontSize:20, fontFamily:'serif'}}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/search" style={{color:'black', fontSize:20, fontFamily:'serif'}}>Search</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/guardian" style={{color:'black', fontSize:20, fontFamily:'serif'}}>Contact Person</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/medall" style={{color:'black', fontSize:20, fontFamily:'serif'}}>Medical History</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/appindex" style={{color:'black', fontSize:20, fontFamily:'serif'}}>Appointments</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/userprofile" style={{color:'black', fontSize:20, fontFamily:'serif'}}>Profile</Link>
              </li>
              <li className="nav-item">
                <button type="button" onClick={logout} class="btn btn-info btn-sm" style={{color:'black', fontSize:20, fontFamily:'serif'}}>Logout</button>
               
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;