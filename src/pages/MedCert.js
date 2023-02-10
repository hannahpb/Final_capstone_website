import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import {IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import './css/AppointmentIndex.css';

function MedCert() {
  const [loading, setLoading] = useState(true);
  const [Med, setMed] = useState([]);


  useEffect(() => {
    axios.get(`/api/medcert`).then((res) => {
      if (res.status === 200) {
        setMed(res.data.reqmed);
        setLoading(false);
      }
    });
  }, []);

  const deleteMedCert = (e, id) => {
    e.preventDefault();

    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Deleting";

    axios.delete(`/api/delete-medcert/${id}`).then((res) => {
      if (res.data.status === 200) {
        swal("Deleted!", res.data.message, "success");
        thisClicked.closest("tr").remove();
      } else if (res.data.status === 404) {
        swal("Error", res.data.message, "error");
        thisClicked.innerText = "Delete";
      }
    });
  };


  if (loading) {
    return <h4>Loading Med Cert Data...</h4>;
  } else {
    var student_HTMLTABLE = "";

    student_HTMLTABLE = Med.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.fname}</td>
          <td>{item.lname}</td>
          <td>{item.purpose}</td>
          <td>{item.verdict}</td>
          <td>{item.date}</td>
          <td>{item.diagnosis}</td>
          <td>{item.doctor}</td>
          <td>{item.uid}</td>
          <td>
            <Link
              to={"/editmed"}
              state={item}
              className="btn btn-success btn-sm"
            >
              Verify
            </Link>
          </td>
          <td>
            <button
              type="button"
              onClick={(e) => deleteMedCert(e, item.id)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  return (
    <>

<div>
  <nav class="navbar navbar-dark bg-custom-2">
  <Link to='/appindex'>
      <IconButton sx= {{ color: 'black', marginLeft: 10}}>
          <Icon icon="eva:arrow-ios-back-fill" />
      </IconButton>
  </Link>
  </nav>

      
      <div className="container">
        <br/><br/>
      <div className="card-header">   
          <br></br>
          <br></br>
          <text className="clinicappoinments">Medical Certificate Request</text>
          <br></br>
          <br></br>
      </div>
      <div>
        
        </div>
        <table className="table table-striped table-info">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Purpose</th>
              <th>Decision</th>
              <th>Date Issued</th>
              <th>Diagnosis</th>
              <th>Doctor in Charge</th>
              <th>User ID</th>
              <th>Verification</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{student_HTMLTABLE}</tbody>
        </table>
      </div>
      </div>
    </>
  );
}

export default MedCert;