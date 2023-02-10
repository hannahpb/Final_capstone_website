import {IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import './css/AppointmentIndex.css';

function AptIndex() {  

  let user = JSON.parse(localStorage.getItem('user-info'))

  const [pref, setPref] = useState("");
  const [accept, setAccept] = useState("");
  const history = useNavigate();

  useEffect(() => {
    axios.get('/api/pending').then(response => {
      if(response.status === 200)
      {
          setPref(response.data.all)
      }
    });
    axios.get('/api/accepted').then(response => {
      if(response.status === 200)
      {
          setAccept(response.data.all)
      }
    });
  }, []);

  function logout()
  {
    localStorage.clear();
    history("/")
  }

  return (
<>


{/* <div>
      <div className='nav-square'>
      <Link to='/dashboard'>
         <IconButton sx= {{ color: 'white', marginLeft: 5, marginTop: 5}}>
            <Icon icon="eva:arrow-ios-back-fill" />
          </IconButton>
      </Link>
      <Link className="navbar-brand" to="/" style={{color:'white', fontSize:20, fontFamily:'serif', fontWeight:'bold', marginLeft:1250}}>Logout</Link>
        <div className='user-profile-name'>
          <text>{user.name}</text>
        </div>
        <div className='user-profile-email'>
           <text>{user.email}</text>
        </div>
        </div>
</div> */}

<nav class="navbar navbar-dark bg-custom-2">
  <Link to='/dashboard'>
    <IconButton sx= {{ color: 'black', marginLeft: 10}}>
        <Icon icon="eva:arrow-ios-back-fill" />
      </IconButton>
  </Link>

  <Link className="navbar-brand" to="/" style={{color:'white', fontSize:20, fontFamily:'serif', fontWeight:'bold', marginLeft:1150, color:'black'}}>Logout</Link>
    <div className='user-profile-name'>
      <text>{user.name}</text>
    </div>
    <div className='user-profile-email'>
        <text>{user.email}</text>
    </div>

</nav>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <div className='user-profile-name'>
                <text>{user.name}</text>
              </div>
                <div className='user-profile-email'>
                <text>{user.email}</text>
              </div>
              </li>
            </ul>
          </div> 

<div className="header-image">
    <div>
        {/* <img src="/confirm.png" alt='appoint' width={500} height={300} className='confirm-image'></img> */}
    <div className="header-title">
         <text className='confirmation'>Confirmation</text>
    </div>
    <div style={{ marginLeft: 60 }}>
          <text className='pending'>Pending Appointments: {pref}</text> <br />
          <text className='accept'>Accepted Appointments: {accept}</text>
    </div>
        <div className="body-card">
         <div className="body-title">
            <text className='clinicappt'>Clinic Appointment</text>           
         </div>
         <Link to='/apt'>
         <div className='clinic-image'>
            <img src="/clinic1.png" alt='clinic' width={80} height={80}></img>
          </div>   
          </Link>    
        </div>  

        
        
        <div className="body-card-one">
          <div className="body-title-one">
            <text className='clinicappt'>Dental Appointment</text>
          </div>
        <Link to='/dentalapp'>
        <div className="dental-image">
          <img src="/dent1.png" alt='dent' width={80} height={80}></img>
        </div>
        </Link>
        </div>

        <div className="body-card-two">
          <div className="body-title-two">
            <text className='medcert-text'>Medical Certificate Request</text>
          </div>
        <Link to='/med'>
        <div className="medcerti-image">
          <img src="/medicalcerti.png" alt='cert' width={180} height={150}></img>
        </div>
        </Link>
        </div>

        
        

        </div>
</div>


    </>

  );
  }


export default AptIndex;