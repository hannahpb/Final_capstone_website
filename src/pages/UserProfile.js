import './css/UserProfile.css';
import {IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';


function UserProfile() {   
  let user = JSON.parse(localStorage.getItem('user-info'))
  return (
<>
<div>
  
<nav class="navbar navbar-dark bg-custom-2">
    <Link to='/dashboard'>
      <IconButton sx= {{ color: 'black', marginLeft: 10}}>
          <Icon icon="eva:arrow-ios-back-fill" />
        </IconButton>
    </Link>
    <text className="userprofile">User Profile</text>
</nav>
      
<div className='user-profile-name'>
    <text>{user.name}</text>
  </div>
  <div className='user-profile-email'>
      <text>{user.email}</text>
  </div>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

    
<div className='title-sec'>
  <text class="content-preference">PREFERENCES</text>
  <div class="card-section-one">
  <div class="card-image-two">
    <img src="/pol.png" alt='pol' width={40} height={40}></img>
    <text style={{marginLeft: 20, fontWeight:'bold', fontSize:30}}>Policy</text>
    <Link to="/policy">
        <IconButton sx= {{ color: 'black', ml:20}}>
        <Icon icon="eva:arrow-ios-forward-fill" />
        </IconButton>
      </Link>
  </div>
  </div>
  <div class="card-section-two">
<div class="card-image-three">
    <img src="/about1.png" alt='about1' width={40} height={40}></img>
    <text style={{marginLeft: 20, fontWeight:'bold', fontSize:30}}>About</text>
    <Link to="/about">
        <IconButton sx= {{ color: 'black', ml:20}}>
        <Icon icon="eva:arrow-ios-forward-fill" />
        </IconButton>
      </Link>
</div>
</div>
</div>





    </>

  );
  }


export default UserProfile;