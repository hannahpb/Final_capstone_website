import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from 'react-router';
import axios from "axios";
import swal from "sweetalert";
import Navbar from "./Navbar";

function AddGuardian() {
    const location = useLocation();
    const state = location.state;
    const history = useNavigate();

    let x = state.id;

    const [studentInput, setStudent] = useState({
    name: "",
    num: "",
    relts: "",
    student_id: x,
    error_list: [],
    });

    const handleInput = (e) => {
    e.persist();
    setStudent({ ...studentInput, [e.target.name]: e.target.value });
    };

    const saveStudent = (e) => {
    e.preventDefault();

    const data = {
        name: studentInput.name,
        num: studentInput.num,
        relts: studentInput.relts,
        student_id: studentInput.student_id,
    };

    axios.post(`/api/add-guardian`, data).then((res) => {
        if (res.data.status === 200) {
        swal("Success!", res.data.message, "success");
        setStudent({
            name: "",
            num: "",
            relts: "",
            student_id: "",
            error_list: [],
        });
        history("/dashboard");
        } else if (res.data.status === 422) {
        setStudent({ ...studentInput, error_list: res.data.validate_err });
        }
    });
    };

    return (
    <>
        <Navbar />
        <img src="/addguardian.png" alt="bg" width={500} height={350} style={{  marginTop: 35, marginLeft:530 }} ></img> 
        <div className="col-sm-6 offset-sm-3">
        <h3>Add Contact Person</h3>
        </div>
        <div className="col-sm-6 offset-sm-3">
        <form onSubmit={saveStudent}>
            <div className="form-group mb-3">
            <label>Name</label>
            <input
                type="text"
                name="name"
                style={{ height: 50 }}
                onChange={handleInput}
                value={studentInput.name}
                className="form-control"
            />
            <span className="text-danger">{studentInput.error_list.name}</span>
            </div>
            <div className="form-group mb-3">
            <label>Contact Number</label>
            <input
                type="text"
                name="num"
                style={{ height: 50 }}
                onChange={handleInput}
                value={studentInput.num}
                className="form-control"
            />
            <span className="text-danger">{studentInput.error_list.num}</span>
            </div>
            <div className="form-group mb-3">
            <label>Relation to Student</label>
            <input
                type="text"
                name="relts"
                style={{ height: 50 }}
                onChange={handleInput}
                value={studentInput.relts}
                className="form-control"
            />
            <span className="text-danger">{studentInput.error_list.relts}</span>
            </div>
            <div className="form-group mb-3">
            <label>Student ID</label>
            <input type="text" name="student_id" onChange={handleInput} value={studentInput.student_id} className="form-control" disabled/>
            </div>
            <div className="form-group mb-3">
            <button type="submit" className="btn btn-primary">
                Save Guardian
            </button>
            <Link to={"/dashboard"} className="btn btn-danger btn-sm float-end">
            {" "}
            BACK
            </Link>
            </div>
        </form>
        </div>
    </>
    );
}

export default AddGuardian;
