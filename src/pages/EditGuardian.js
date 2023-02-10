import { useLocation } from 'react-router';
import React, {useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate, Link } from "react-router-dom";
import Navbar from './Navbar';

const EditGuardian = ({userdata}) => {
    const location = useLocation();
    const history = useNavigate();
    const [errorInput, setError] = useState([]);
    const state = location.state;
    const [studentInput, setGuardian] = useState(state);
    

    const handleInput = (e) => {
        e.persist();
        setGuardian({...studentInput, [e.target.name]: e.target.value });
    }


    const updateStudent = (e) => {
        e.preventDefault();
        
        const guardian_id = state.id;
        const data = {
            name: studentInput.name || state.name,
            num: studentInput.num || state.num,
            relts: studentInput.relts || state.relts,
            student_id: studentInput.student_id || state.student_id,
        }
        axios.put(`/api/update-guardian/${guardian_id}`, data).then(res=>{
            if(res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                setError([]);
                history('/guardian');
            }
            else if(res.data.status === 422)
            {
                swal("All fields are mandetory","","error");
                setError(res.data.validationErrors);
            }
            else if(res.data.status === 404)
            {
                swal("Error",res.data.message,"error");
                history('/guardian');
            }
        });
    }
    return(
        <>
        <Navbar />
        <img src="/contact.png" alt="bg" width={555} height={350} style={{  marginTop: -15, marginLeft:530 }} ></img> 
      <br></br>
        <br></br>
        <br></br>
        <div className="col-sm-6 offset-sm-3">
            <h4>Edit Contact Person
                
             </h4>
            <form onSubmit={(e) => updateStudent(e)} >
                <div className="form-group mb-3">
                    <label>Name</label>
                    <input style={{ height:50 }} type="text" name="name" onChange={(e) => handleInput(e)} value={studentInput.name} className="form-control" />
                    <span className="text-danger">{errorInput.name}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Contact Number</label>
                    <input style={{ height:50 }} type="text" name="num" onChange={(e) => handleInput(e)} value={studentInput.num} className="form-control" />
                    <span className="text-danger">{errorInput.num}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Relation to Student</label>
                    <input type="text" style={{ height:50 }} name="relts" onChange={(e) => handleInput(e)} value={studentInput.relts}  className="form-control" />
                    <span className="text-danger">{errorInput.relts}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Student ID</label>
                    <input type="text" style={{ height:50 }} name="student_id" onChange={(e) => handleInput(e)} value={studentInput.student_id} className="form-control" disabled/>
                </div>
                <div className="form-group mb-3">
                <Link to={'/guardian'} className="btn btn-danger btn-sm float-end"> BACK</Link>
                    <button type="submit" id="updatebtn" className="btn btn-primary">Update Guardian</button>
                </div>
            </form>
        </div>
        </>
    )
}
 export default EditGuardian;