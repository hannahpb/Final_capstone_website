import { useLocation } from 'react-router';
import React, {useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate, Link } from "react-router-dom";
import Navbar from './Navbar';

const EditAptClinic = ({userdata}) => {
    const location = useLocation();
    const history = useNavigate();
    const [errorInput, setError] = useState([]);
    const state = location.state;
    const [studentInput, setApt] = useState(state);
    

    const handleInput = (e) => {
        e.persist();
        setApt({...studentInput, [e.target.name]: e.target.value });
    }


    const updateStudent = (e) => {
        e.preventDefault();
        
        const apt_id = state.id;
        const data = {
            fname: studentInput.fname || state.fname,
            lname: studentInput.lname || state.lname,
            aptcategory: studentInput.aptcategory || state.aptcategory,
            aptdate: studentInput.aptdate || state.aptdate,
            apttime: studentInput.apttime || state.apttime,
            aptpurpose: studentInput.aptpurpose || state.aptpurpose,
            aptverify: studentInput.aptverify || state.aptverify, 
            user_id: studentInput.user_id || state.user_id, 
        }
        axios.put(`/api/update-apt/${apt_id}`, data).then(res=>{
            if(res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                setError([]);
                history('/apt');
            }
            else if(res.data.status === 422)
            {
                swal("All fields are mandetory","","error");
                setError(res.data.validationErrors);
            }
            else if(res.data.status === 404)
            {
                swal("Error",res.data.message,"error");
                history('/apt');
            }
        });
    }
    return(
        <>
        <Navbar />
        <div className="col-sm-6 offset-sm-3">
        <br></br>
            <text style={{fontSize:35, marginLeft:220, fontFamily:'monospace'}}>Verify Appointment</text>
      
            <form onSubmit={(e) => updateStudent(e)} >
                <div className="form-group mb-3">
                    <label>First Name</label>
                    <input style={{ height:50 }} type="text" name="fname" onChange={(e) => handleInput(e)} value={studentInput.fname} className="form-control" disabled/>
                    <span className="text-danger">{errorInput.fname}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Last Name</label>
                    <input style={{ height:50 }} type="text" name="lname" onChange={(e) => handleInput(e)} value={studentInput.lname} className="form-control" disabled/>
                    <span className="text-danger">{errorInput.lname}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Appointment Category</label>
                    <input type="text" style={{ height:50 }} name="aptcategory" onChange={(e) => handleInput(e)} value={studentInput.aptcategory}  className="form-control" disabled/>
                    <span className="text-danger">{errorInput.aptcategory}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Appointment Date</label>
                    <input type="text" style={{ height:50 }} name="aptdate" onChange={(e) => handleInput(e)} value={studentInput.aptdate}  className="form-control" disabled/>
                    <span className="text-danger">{errorInput.aptdate}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Appointment Time</label>
                    <input type="text" style={{ height:50 }} name="apttime" onChange={(e) => handleInput(e)} value={studentInput.apttime}  className="form-control" disabled/>
                    <span className="text-danger">{errorInput.apttime}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Appointment Purpose</label>
                    <input type="text" style={{ height:50 }} name="aptpurpose" onChange={(e) => handleInput(e)} value={studentInput.aptpurpose}  className="form-control" disabled/>
                    <span className="text-danger">{errorInput.aptpurpose}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Appointment Verification</label>
                    <select type="text"  name="aptverify" onChange={(e) => handleInput(e)}  value={studentInput.aptverify} className="form-control">
                        <option value="Processing">Processing</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Not Accepted">Not Accepted</option>
                    </select>
                    <span className="text-danger">{errorInput.aptverify}</span>
                </div>
                <div className="form-group mb-3">
                    <label>User ID</label>
                    <input type="text" style={{ height:50 }} name="user_id" onChange={(e) => handleInput(e)} value={studentInput.user_id}  className="form-control" disabled/>
                    <span className="text-danger">{errorInput.user_id}</span>
                </div>
                <div className="form-group mb-3">
                <Link to={'/apt'} className="btn btn-danger btn-sm float-end"> BACK</Link>
                    <button type="submit" id="updatebtn" className="btn btn-primary">Verify Appointment</button>
                </div>
            </form>
        </div>
        </>
    )
}
 export default EditAptClinic;