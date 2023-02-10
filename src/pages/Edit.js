import { useLocation } from 'react-router';
import React, {useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate, Link } from "react-router-dom";
import Navbar from './Navbar';

const Edit = ({userdata}) => {
    const location = useLocation();
    const history = useNavigate();
    const [errorInput, setError] = useState([]);
    const state = location.state;
    const [studentInput, setStudent] = useState(state);

    const handleInput = (e) => {
        e.persist();
        setStudent({...studentInput, [e.target.name]: e.target.value });
    }


    const updateStudent = (e) => {
        e.preventDefault();
        
        const student_id = state.id;
        const data = {
            fname: studentInput.fname || state.fname,
            lname: studentInput.lname || state.lname,
            category: studentInput.category || state.category,
            bday: studentInput.bday || state.bday,
            sex: studentInput.sex || state.sex,
            phone: studentInput.phone || state.phone,
            course: studentInput.course || state.course,
            yrlvl: studentInput.yrlvl || state.yrlvl,
            address: studentInput.address || state.address,
            religion: studentInput.religion || state.religion, 
            cvs: studentInput.cvs || state.cvs,
        }
        axios.put(`/api/update-student/${student_id}`, data).then(res=>{
            if(res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                setError([]);
                history('/dashboard');
            }
            else if(res.data.status === 422)
            {
                swal("All fields are mandetory","","error");
                setError(res.data.validationErrors);
            }
            else if(res.data.status === 404)
            {
                swal("Error",res.data.message,"error");
                history('/dashboard');
            }
        });
    }
    return(
        <>
        <Navbar />
        <img src="/student.png" alt="bg" width={450} height={350} style={{  marginTop: 35, marginLeft:550 }} ></img> 
        <div className="col-sm-6 offset-sm-3">
            <h3>Edit Students</h3>

            <form onSubmit={(e) => updateStudent(e)} >
                <div className="form-group mb-3">
                    <label>First Name</label>
                    <input style={{ height:50 }} type="text" name="fname" onChange={(e) => handleInput(e)} value={studentInput.fname} className="form-control" />
                    <span className="text-danger">{errorInput.fname}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Last Name</label>
                    <input style={{ height:50 }} type="text" name="lname" onChange={(e) => handleInput(e)} value={studentInput.lname} className="form-control" />
                    <span className="text-danger">{errorInput.lname}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Category</label>
                    <select type="text" name="category" onChange={(e) => handleInput(e)} value={studentInput.category} className="form-control">
                        <option value="Student">Student</option>
                        <option value="Employee">Employee</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label>Birthdate</label>
                    <input type="text" style={{ height:50 }} name="bday" onChange={(e) => handleInput(e)} value={studentInput.bday}  className="form-control" disabled/>
                    <span className="text-danger">{errorInput.bday}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Sex</label>
                    <select type="text" name="sex" onChange={(e) => handleInput(e)} value={studentInput.sex} className="form-control">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label>Phone</label>
                    <input type="text" style={{ height:50 }} name="phone" onChange={(e) => handleInput(e)} value={studentInput.phone}  className="form-control" />
                    <span className="text-danger">{errorInput.phone}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Course</label>
                    <select type="text" name="course" onChange={(e) => handleInput(e)} value={studentInput.course} className="form-control">
                        <option value="Engineering">Engineering</option>
                        <option value="Maritime">Maritime</option>
                        <option value="Education">Education</option>
                        <option value="Nursing">Nursing</option>
                        <option value="Psychology">Psychology</option>
                        <option value="Architecture">Architecture</option>
                        <option value="Accountancy">Accountancy</option>
                        <option value="Arts and Science">Arts and Science</option>
                        <option value="Criminology">Criminology</option>
                        <option value="Computing and Multimedia Studies">Computing and Multimedia Studies</option>
                        <option value="Hospitality and Tourism Management">Hospitality and Tourism Management</option>
                        <option value="N/A">N/A</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label>Year Level</label>
                    <select type="text" name="yrlvl" onChange={(e) => handleInput(e)} value={studentInput.yrlvl} className="form-control">
                        <option value="1stYear">1st Year</option>
                        <option value="2ndYear">2nd Year</option>
                        <option value="3rdYear">3rd Year</option>
                        <option value="4thYear">4th Year</option>
                        <option value="5thYear">5th Year</option>
                        <option value="N/A">N/A</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label>Address</label>
                    <input type="text" style={{ height:50 }} name="address" onChange={(e) => handleInput(e)} value={studentInput.address}  className="form-control" />
                    <span className="text-danger">{errorInput.phone}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Religion</label>
                    <select type="text"  name="religion" onChange={(e) => handleInput(e)}  value={studentInput.religion} className="form-control">
                        <option value="RomanCatholic">Roman Catholic</option>
                        <option value="Iglesia">Iglesia</option>
                        <option value="BornAgain">Born Again</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                    <span className="text-danger">{errorInput.religion}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Civil Status</label>
                    <select type="text"  name="cvs" onChange={(e) => handleInput(e)}  value={studentInput.cvs} className="form-control">
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Seperated">Seperated</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                <Link to={'/dashboard'} className="btn btn-danger btn-sm float-end"> BACK</Link>
                    <button type="submit" id="updatebtn" className="btn btn-primary">Update Student</button>
                </div>
            </form>
        </div>
        </>
    )
}
 export default Edit;