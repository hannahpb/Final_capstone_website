import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import './css/AdminLogin.css';

const Login = () => {

  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function login(){
    let item={email, password};

    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    if (regex.test(item.email)) {
      if((item.email !== 'admin@gmail.com') || (item.password !== 'admin123')){
        alert("Username or Password is not matched");
      } else {
        history("/adminview")
      }
      /*let result = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    });
    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
    if ("error" in result) {
      alert("Login Credentials do not match")
    } else {
      history("/dashboard")
    }*/
    } else {
      setMsg("Email is not valid")
    }

    


  }

  return (
    <div>
      <div className='nav-square'>
        <Link to='/'>
          <IconButton sx= {{ color: 'white', marginLeft: 5, marginTop: -3}}>
            <Icon icon="eva:arrow-ios-back-fill" />
          </IconButton>
        </Link>
        <text style={{marginLeft: 80, fontWeight:'bold', fontSize:50, fontFamily:'sans-serif', color:'white'}}>  'Hippo-Campus'</text>
        
        </div>

      <div className='hippo-logo'>
        <img src="/logo1.png" alt="bg" width={205} height={205}></img>
      </div>
      <div className="col-sm-6 offset-sm-3">
          <text style={{ marginLeft: 150 }}>MSEUF's first beta web based and mobile application clinic management system</text>
          <br></br>
          <text className="login" style={{ marginLeft: -85}}> LOGIN </text>
        <input type="text" style={{ height:50, marginTop: 2 }} placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="form-control"/>
        {msg}
        <br />
        <input type="password" style={{ height:50 }} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="form-control"/>
        <br />
        <button onClick={login} className="btn4" style={{ marginLeft:300 }}>Login</button>
      </div>


    </div>
  );
};

export default Login;
