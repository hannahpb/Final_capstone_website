import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import './css/Guardian.css';


function Guardian() {
  const [loading, setLoading] = useState(true);
  const [guardian, setGuardian] = useState([]);
  const [table, setTable] = useState(null);

  let user = JSON.parse(localStorage.getItem('user-info'))

  let x = user.authorisation.token;

  useEffect(() => {
    axios.interceptors.request.use(
      config => {
        config.headers.authorization = `Bearer ${x}`
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
    axios.get(`/api/studjoin`).then((res) => {
      if (res.status === 200) {
        setGuardian(res.data.all);
        setLoading(false);
      }
    });
  }, []);
  async function search(key) {
    let result = await fetch("http://localhost:8000/api/join/"+key, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + x
      },
    });
    
    result = await result.json();

    var student_HTMLTABLE = result.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.student_id}</td>
          <td>{item.fname}</td>
          <td>{item.lname}</td>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.num}</td>
          <td>{item.relts}</td>
          <td>
            <Link
              to={"/edit-guardian"}
              state={item}
              className="btn btn-success btn-sm"
            >
              Edit
            </Link>
          </td>
        </tr>
      );
    });
    setTable(student_HTMLTABLE)
}

  if (loading) {
    return <h4>Loading Guardian Data...</h4>;
  } else {
    var student_HTMLTABLE = "";

    student_HTMLTABLE = guardian.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.student_id}</td>
          <td>{item.fname}</td>
          <td>{item.lname}</td>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.num}</td>
          <td>{item.relts}</td>
          <td>
            <Link
              to={"/edit-guardian"}
              state={item}
              className="btn btn-success btn-sm"
            >
              Edit
            </Link>
          </td>
        </tr>
      );
    });
  }

  return (
    <>
      <Navbar />
      <img src="/editcontact.png" alt="bg" width={500} height={350} style={{  marginTop: 35, marginLeft:530 }} ></img> 
      <div className="col-sm-6 offset-sm-3">
        <p className="contact-search">Search Contact by Student ID</p>
        <br></br>
        <input type='text' onChange={(e)=>search(e.target.value)} className="form-control" placeholder="Search Student" />
      </div>
      <br></br>
      <div className="col-sm-6 offset-sm-3">
          <table className="table table-striped table-info">
          <thead>
              <tr>
                <th>Student ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Contact Person ID</th>
                <th>Contact Person Name</th>
                <th>Contact Person Number</th>
                <th>Relation to Student</th>
                <th>Edit</th>
              </tr>
          </thead>
          <tbody>{table}</tbody>
          </table>
    </div>
    <div>
      </div>
      <div className="col-sm-6 offset-sm-3">
        <p className="contact-search" style={{ marginLeft: 5, marginTop:50 }}>
          Contact Person
        </p>
        <br></br>
        <br>
        </br>
        <table className="table table-striped table-info">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Contact Person ID</th>
              <th>Contact Person Name</th>
              <th>Contact Person Number</th>
              <th>Relation to Student</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>{student_HTMLTABLE}</tbody>
          <br></br>
          <br></br>
          <br></br>
        </table>
      </div>
    </>
  );
}

export default Guardian;