import React from 'react';
import { Route, Routes} from 'react-router-dom';


import AddStudent from './pages/AddStudent.js';
import Home from "./pages/Home";
import Login from "./pages/AdminLogin";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Verification from "./pages/Verification";
import CreateNewPassword from "./pages/CreateNewPassword";
import Form from "./pages/Form";
import DataVisual from './pages/DataVisual';
import Appointment from './pages/Appointment';
import DentalAppointment from './pages/DentalApp'
import AptIndex from './pages/AppointmentIndex';
import Edit from './pages/Edit'
import AddDoctor from './pages/AddDoctor';
import EditDoc from './pages/EditDoc';
import Dashboard from './pages/ViewStudent.js';

import axios from 'axios';
import MedCert from './pages/MedCert.js';
import EditMedCert from './pages/EditMedCert.js';
import UserProfile from './pages/UserProfile.js';
import About from './pages/About.js';
import SearchStudent from './pages/Search.js';
import LineChart from './pages/LineChart.js';
import Policy from './pages/Policy.js';
import MedicalRecords from './pages/MedicalRecords.js';
import AddGuardian from './pages/AddGuardian.js';
import Guardian from './pages/Guardian.js';
import EditGuardian from './pages/EditGuardian.js';
import EditAptClinic from './pages/EditApt.js';
import EditAptDental from './pages/EditAptDental.js';
import AddMedicalRecord from './pages/AddMedRec.js';
import Selection from './pages/Selection.js';
import ClinicPersonnelLogin from './pages/ClinicPLogin.js';
import DoctorLogin from './pages/DoctorLogin.js';
import AdminView from './pages/AdminView.js';
import AdminEdit from './pages/AdminEdit.js';
import MedHistory from './pages/MedHistory.js';
import CheckMed from './pages/CheckMedHistory.js';


function App() {
  axios.defaults.baseURL = "http://localhost:8000/";
  return (
    
    <div className="App">
          <Routes>
            <Route path="/"element={<Selection/>} />
            <Route path="/home"element={<Home />} />
            <Route path="/apt"element={<Appointment/>} />
            <Route path="/login"element={<Login/>} />
            <Route path="/signup"element={<Signup/>} />
            <Route path="/forgotpassword"element={<ForgotPassword/>} />
            <Route path="/verification"element={<Verification/>} />
            <Route path="/createnewpassword"element={<CreateNewPassword/>} />
            <Route path="/form"element={<Form/>} />
            <Route path="/datavisual"element={<DataVisual/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/add-students" element={<AddStudent/>} />

            <Route path="/add-guardian" element={<AddGuardian/>} />
            <Route path="/guardian" element={<Guardian/>} />
            <Route path="/edit-guardian" element={<EditGuardian/>} />

            <Route path="/policy" element={<Policy/>}/>
            <Route path="/medicalrecords" element={<MedicalRecords/>}/>
            <Route path="/edit-aptclinic" element={<EditAptClinic/>}/>
            <Route path="/edit-aptdental" element={<EditAptDental/>}/>

            <Route path="/add-medrec" element={<AddMedicalRecord/>}/>

            <Route path="/cliniclogin" element={<ClinicPersonnelLogin/>}/>
            <Route path="/doctorlogin" element={<DoctorLogin/>}/>
            <Route path="/adminview" element={<AdminView/>}/>
            <Route path="/adminedit" element={<AdminEdit/>}/>

            <Route path="/linechart" element={<LineChart />}/>
            <Route path="/dentalapp" element={<DentalAppointment/>} />
            <Route path="/appindex" element={<AptIndex/>} />
            <Route path="/search" element={<SearchStudent/>} />
            <Route path="/edit" element={<Edit/>} />
            <Route path="/add-doctors" element={<AddDoctor/>} />
            <Route path="/med" element={<MedCert/>}/>
            <Route path="/editmed" element={<EditMedCert/>}/>
            <Route path="/userprofile" element={<UserProfile/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/edit-doctor" element={<EditDoc/>} />

            <Route path="/medall" element={<MedHistory/>} />
            <Route path="/checkmed" element={<CheckMed/>} />
          </Routes>
    </div>
  );
}

export default App;
