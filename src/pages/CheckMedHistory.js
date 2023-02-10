import { useLocation } from 'react-router';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from './Navbar';
import './css/CheckMedHistory.css';

const CheckMed = ({userdata}) => {
    const location = useLocation();
    const state = location.state;

    let x = state.id

    const [loading, setLoading] = useState(true);
    const [students, setStudents] = useState([]);
    let user = JSON.parse(localStorage.getItem('user-info'))

    let token = user.authorisation.token;
  
  useEffect(() => {
    axios.interceptors.request.use(
      config => {
        config.headers.authorization = `Bearer ${token}`
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
    axios.get(`/api/mh/${x}`).then((res) => {
      if (res.status === 200) {
        setStudents(res.data.apt);
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <h4>Loading User Data...</h4>;
  } else {
    var student_HTMLTABLE = "";

    student_HTMLTABLE = students.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.fname}</td>
          <td>{item.lname}</td>
          <td>{item.aptcategory}</td>
          <td>{item.aptdate}</td>
          <td>{item.apttime}</td>
          <td>{item.aptpurpose}</td>
        </tr>
      );
    });
  }
    

    return(
        <>
      <Navbar />
      <div>
        <div style={{ marginLeft: 40, marginTop:45 }}>
         
        </div>
        <p className="data">
          User Account Data
        </p>
      </div>
      <div>
        <table className="table table-striped table-info">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Category</th>
              <th>Date</th>
              <th>Time</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>{student_HTMLTABLE}</tbody>
        </table>
      </div>
    </>
    )
}
 export default CheckMed;