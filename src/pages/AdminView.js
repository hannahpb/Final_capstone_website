import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './css/AdminView.css';

function AdminView() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const history = useNavigate();
  function logout() {
    localStorage.clear();
    history("/");
  }

  useEffect(() => {
    axios.get(`/api/users`).then((res) => {
      if (res.status === 200) {
        setUsers(res.data.user);
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <h4>Loading User Data...</h4>;
  } else {
    var student_HTMLTABLE = "";

    student_HTMLTABLE = users.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.verified}</td>
          <td>
            <Link to={"/adminedit"} state={item} className="btn btn-success btn-sm">
              Edit
            </Link>
          </td>
        </tr>
      );
    });
  }

  return (
    <>
    <body>
    <div className="pb-7">
        <nav className="navbar navbar-expand-lg bg-info">
        <div className="container">
          <text className="navbar-brand" to="/" style={{color:'black', fontSize:25, fontFamily:'serif', fontWeight:'bold', marginLeft:-20}}>Admin</text>

          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-5 mb-lg-0">
              <li className="nav-item">
          
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/login" style={{color:'black', fontSize:20, fontFamily:'serif'}}>Logout</Link>
          
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
       
      <div>
        <br></br>
        <br></br>
        <text className="userdata" style={{ marginLeft:700, fontSize:50, fontFamily:'monospace'}}>
          User Data
        </text>   
        
      <img src="/info.png" alt="bg" width={300} height={300} style={{  marginTop: -15, marginLeft:-500 }} ></img> 
      </div>
      <div>
      <br></br>
      <br></br>
      <br></br>
      <div className="col-sm-6 offset-sm-3">

     
        <table className="table table-striped table-info">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>     
              <th></th>   
              <th></th>        
              
            </tr>
          </thead>
          <tbody>{student_HTMLTABLE}</tbody>
        </table>
      </div>
      <br></br>
  
      </div>
      </body>
    </>
  );
}

export default AdminView;
