import './css/LoginSignup.css';
import {Link} from 'react-router-dom'
function Selection() {
  return (
    <div className='full-header'>
      <Link to='/login'>
        <button class="btn3" >Admin</button>
      </Link>
        
        <br></br>
        <Link to='/cliniclogin'>
          <button class="btn1" >Clinic Personnel</button>
        </Link>

        <br></br>
        <Link to='/doctorlogin'>
          <button class="btn1" >Doctor</button>
        </Link>
        

        <div class="image-background">
              <img src="/logbg.png" alt="bg" width={550} height={550}></img>
        </div> 
    </div>
  );
}


export default Selection;
