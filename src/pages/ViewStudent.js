import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import LineChart from "./LineChart";
import BCHART from "./BarChart";
import YRBChart from "./BChartYrlvl";
import CourseChart from "./LChartCourse";
import './css/ViewStudent.css';

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [data, setData] = useState('');

  //count
  const [female, setFemale] = useState('');
  const [male, setMale] = useState('');
  const [stud, setStud] = useState('');
  const [emp, setEmp] = useState('');

  //Religion
  const [rc, setRC] = useState('');
  const [ba, setBA] = useState('');
  const [ig, setIG] = useState('');
  const [prr, setPRR] = useState('');

  //Civil Status
  const [single, setSingle] = useState('');
  const [mar, setMar] = useState('');
  const [sep, setSep] = useState('');
  const [pref, setPref] = useState('');

  //yearlvl
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [fourth, setFourth] = useState('');
  const [fifth, setFifth] = useState('');
  const [sixth, setSixth] = useState('');

  //course
  const [eng, setEng] = useState('');
  const [maritime, setMaritime] = useState('');
  const [educ, setEducation] = useState('');
  const [nursing, setNursing] = useState('');
  const [psych, setPsych] = useState('');
  const [arch, setArch] = useState('');
  const [acc, setAcc] = useState('');
  const [aas, setAas] = useState('');
  const [crim, setCrim] = useState('');
  const [ccms, setCCMS] = useState('');
  const [htm, setHTM] = useState('');

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
    )

    axios.get(`/api/students`).then((res) => {
      if (res.status === 200) {
        setStudents(res.data.students);
        setLoading(false);
      }
    });
    axios.get('/api/counter').then(response => {
      if(response.status === 200)
      {
          setData(response.data.all)
      }
    });
    axios.get('/api/female').then(response => {
      if(response.status === 200)
      {
          setFemale(response.data.all)
      }
    });
    axios.get('/api/male').then(response => {
      if(response.status === 200)
      {
          setMale(response.data.all)
      }
    });
    //Religion
    axios.get('/api/RC').then(response => {
      if(response.status === 200)
      {
          setRC(response.data.all)
      }
    });
    axios.get('/api/BA').then(response => {
      if(response.status === 200)
      {
          setBA(response.data.all)
      }
    });
    axios.get('/api/IG').then(response => {
      if(response.status === 200)
      {
          setIG(response.data.all)
      }
    });
    axios.get('/api/PRR').then(response => {
      if(response.status === 200)
      {
          setPRR(response.data.all)
      }
    });
    //Civil Status
    axios.get('/api/single').then(response => {
      if(response.status === 200)
      {
          setSingle(response.data.all)
      }
    });
    axios.get('/api/married').then(response => {
      if(response.status === 200)
      {
          setMar(response.data.all)
      }
    });
    axios.get('/api/sep').then(response => {
      if(response.status === 200)
      {
          setSep(response.data.all)
      }
    });
    axios.get('/api/pref').then(response => {
      if(response.status === 200)
      {
          setPref(response.data.all)
      }
    });
    //YearLevel
    axios.get('/api/first').then(response => {
      if(response.status === 200)
      {
          setFirst(response.data.all)
      }
    });
    axios.get('/api/second').then(response => {
      if(response.status === 200)
      {
          setSecond(response.data.all)
      }
    });
    axios.get('/api/third').then(response => {
      if(response.status === 200)
      {
          setThird(response.data.all)
      }
    });
    axios.get('/api/fourth').then(response => {
      if(response.status === 200)
      {
          setFourth(response.data.all)
      }
    });
    axios.get('/api/fifth').then(response => {
      if(response.status === 200)
      {
          setFifth(response.data.all)
      }
    });
    //Course
    axios.get('/api/engineering').then(response => {
      if(response.status === 200)
      {
          setEng(response.data.all)
      }
    });
    axios.get('/api/maritime').then(response => {
      if(response.status === 200)
      {
          setMaritime(response.data.all)
      }
    });
    axios.get('/api/education').then(response => {
      if(response.status === 200)
      {
          setEducation(response.data.all)
      }
    });
    axios.get('/api/nursing').then(response => {
      if(response.status === 200)
      {
          setNursing(response.data.all)
      }
    });
    axios.get('/api/psychology').then(response => {
      if(response.status === 200)
      {
          setPsych(response.data.all)
      }
    });
    axios.get('/api/architecture').then(response => {
      if(response.status === 200)
      {
          setArch(response.data.all)
      }
    });
    axios.get('/api/accountancy').then(response => {
      if(response.status === 200)
      {
          setAcc(response.data.all)
      }
    });
    axios.get('/api/aas').then(response => {
      if(response.status === 200)
      {
          setAas(response.data.all)
      }
    });
    axios.get('/api/criminology').then(response => {
      if(response.status === 200)
      {
          setCrim(response.data.all)
      }
    });
    axios.get('/api/ccms').then(response => {
      if(response.status === 200)
      {
          setCCMS(response.data.all)
      }
    });
    axios.get('/api/htm').then(response => {
      if(response.status === 200)
      {
          setHTM(response.data.all)
      }
    });
    axios.get('/api/studcount').then(response => {
      if(response.status === 200)
      {
          setStud(response.data.all)
      }
    });
    axios.get('/api/employeecount').then(response => {
      if(response.status === 200)
      {
          setEmp(response.data.all)
      }
    });
    axios.get('/api/sixth').then(response => {
      if(response.status === 200)
      {
          setSixth(response.data.all)
      }
    });
  }, []);

  if (loading) {
    return <h4>Loading Student Data...</h4>;
  } else {
    var student_HTMLTABLE = "";

    student_HTMLTABLE = students.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.fname}</td>
          <td>{item.lname}</td>
          <td>{item.category}</td>
          <td>{item.bday}</td>
          <td>{item.sex}</td>
          <td>{item.phone}</td>
          <td>{item.course}</td>
          <td>{item.yrlvl}</td>
          <td>{item.address}</td>
          <td>{item.religion}</td>
          <td>{item.cvs}</td>
          <td><img src={ "http://localhost:8000/" + item.cbc } className="img-fluid img-bordered" width="200px" alt='alternative'/></td>
          <td><img src={ "http://localhost:8000/" + item.uri } className="img-fluid img-bordered" width="200px" alt='alternative'/></td>
          {/*<td>
            <Link
              to={"/add-medrec"}
              state={item}
              className="btn btn-success btn-sm"
            >
              Add
            </Link>
          </td>*/}
          {/* <td>
            <Link
              to={"/add-guardian"}
              state={item}
              className="btn btn-success btn-sm"
            >
              Add
            </Link>
          </td>
          <td>
            <Link
              to={"/edit"}
              state={item}
              className="btn btn-success btn-sm"
            >
              Edit
            </Link>
          </td> */}
        </tr>
      );
    });
  }
  
  return (
    <>
      <Navbar />
      <div>
        <div style={{ marginLeft: 40, marginTop:45 }}>
         
        </div>
        <br></br>
        <br></br>
        <div className="total-list">
          <p>Total Number of Users: {data}</p>
          <p>Total Number of Female Students: {female}</p>
          <p>Total Number of Male Students: {male}</p>
          <p>Total Number of Students: {stud}</p>
          <p>Total Number of Employees: {emp}</p>
        </div>
        <br></br>
        <br></br>
        <div className="chart-title">
          <p>Civil Status Chart</p>
          <BCHART />
        </div>
        <div className="legend" style={{ marginLeft: 550, marginTop: -110 }}>
          <p>Legend:</p>
          <p>Total Single: {single}</p>
          <p>Total Married: {mar}</p>
          <p>Total Seperated: {sep}</p>
          <p>Total Prefer not to say: {pref}</p>
        </div>
        <div className="chart-title" style={{ marginLeft: 750, marginTop: -280 }}>
          <p>Religion Chart</p>
          <LineChart/>
        </div>
        <div className="legend" style={{ marginLeft: 1250, marginTop: -120 }}>
          <p>Legend:</p>
          <p>Total Roman Catholic: {rc}</p>
          <p>Total Born Again: {ba}</p>
          <p>Total Iglesia: {ig}</p>
          <p>Total Prefer not to say: {prr}</p>
        </div>
        <div className="chart-title" style={{ marginLeft: 100}}>
          <p>Year Level Chart</p>
          <YRBChart/>
        </div>
        <div className="legend" style={{ marginLeft: 550, marginTop: -110 }}>
          <p>Legend:</p>
          <p>Total First Year: {first}</p>
          <p>Total Second Year: {second}</p>
          <p>Total Third Year: {third}</p>
          <p>Total Fourth Year: {fourth}</p>
          <p>Total Fifth Year: {fifth}</p>
          <p>Total Employee: {sixth}</p>
        </div>
        <div className="chart-title" style={{ marginLeft: 750, marginTop: -370 }}>
          <p>Course Chart</p>
          <CourseChart/>
        </div>
        <div className="legend" style={{ marginLeft: 1250, marginTop: -120 }}>
          <p>Legend:</p>
          <p>Total Engineering: {eng}</p>
          <p>Total Maritime: {maritime}</p>
          <p>Total Education: {educ}</p>
          <p>Total Nursing: {nursing}</p>
          <p>Total Psychology: {psych}</p>
          <p>Total Architecture: {arch}</p>
          <p>Total Accountancy: {acc}</p>
          <p>Total Arts and Science: {aas}</p>
          <p>Total Criminology: {crim}</p>
          <p>Total Computing and Multimedia Studies: {ccms}</p>
          <p>Total Hospitality and Tourism Management: {htm}</p>
        </div>
        <br></br>
        <hr className="brkline"></hr>
        <br></br>
        <p className="med-title" style={{ marginLeft: 50 }}>
          Medical Data
          <Link
            to={"/add-students"}
            class="btn btn-info btn-sm" style={{ marginLeft: 1150, marginTop:-60 }} 
          >
            {" "}
            Add User
          </Link>
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
              <th>Birthdate</th>
              <th>Sex</th>
              <th>Phone</th>
              <th>Course</th>
              <th>Year Level</th>
              <th>Address</th>
              <th>Religion</th>
              <th>Civil Status</th>
              <th>CBC Image</th>
              <th>Urinalysis Image</th>
              <th>Add Medical Record</th>
              <th>Add Contact Person</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>{student_HTMLTABLE}</tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;