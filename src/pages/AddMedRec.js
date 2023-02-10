import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router';
import Navbar from './Navbar';

function AddMedicalRecord() {
    const location = useLocation();
    const state = location.state;
    const history = useNavigate();

    const [base, setbase] = useState(null);
    const [fileext, setFileExt] = useState(null);
    const [cbcJson, setCbcJson] = useState(null);
    const [uriJson, setUriJson] = useState(null);


    let x = state.id;

    const [studentInput, setStudent] = useState({
    cbc: "",
    uri: "",
    student_id: "",
    error_list: [],
    });

    const handleInput = (e) => {
    e.persist();
    setStudent({ ...studentInput, [e.target.name]: e.target.value });
    };

    const fileToBase64 = (file) => {
        const fileExtension = file.name.split(".").pop();

        const reader = new FileReader();

        reader.addEventListener("load", () => {
            // only get base64 part from reader.result
            const base64 = reader.result.split(",").pop();

            // Do something here or save fileExtension and base64 to a state
            setbase(base64);
            setFileExt(fileExtension);
        });

        reader.readAsDataURL(file);
    };

    const fileToJson = (fileObj, callback) => {
        fileToBase64(fileObj);

        if (base !== null && fileext !== null) {
            fetch("https://record-parser.onrender.com/files", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ext: fileext,
                    file: base,
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    callback(data);
                });
        }
    };

    useEffect(() => {
        if (cbcJson !== null && uriJson !== null) {
            fetch('http://localhost:8000/api/addmedrec', {
                method: "POST",
                headers: {
                    'Accept':'application/json',
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    cbc: JSON.stringify(cbcJson),
                    uri: JSON.stringify(uriJson),
                    student_id: x
                }),
            }).then(() => {
                    setCbcJson(null)
                    setUriJson(null)
                });
        }
    }, [cbcJson, uriJson])

    const saveStudent = (e) => {
        e.preventDefault();

        const cbc = e.target[0].files[0];
        const uri = e.target[1].files[0];

        fileToJson(cbc, setCbcJson);
        fileToJson(uri, setUriJson);

        history('/dashboard')
    };

    return (
        <>
        <Navbar/>
            <div className="col-sm-6 offset-sm-3">
                <br></br>
                <h4>Add Medical Record</h4>
            </div>
            <div className="col-sm-6 offset-sm-3">
                <form onSubmit={saveStudent}>
                    <div className="form-group mb-3">
                        <label>CBC</label>
                        <input
                            type="file"
                            name="cbc"
                            onChange={handleInput}
                            value={studentInput.cbc}
                            className="form-control"
                        />
                        <span className="text-danger">{studentInput.error_list.cbc}</span>
                    </div>
                    <div className="form-group mb-3">
                        <label>Urinalysis</label>
                        <input
                            type="file"
                            name="uri"
                            onChange={handleInput}
                            value={studentInput.uri}
                            className="form-control"
                        />
                        <span className="text-danger">{studentInput.error_list.uri}</span>
                    </div>
                    <div className="form-group mb-3">
                        <label>Student ID</label>
                        <input type="text" style={{ height: 50 }} name="student_id" onChange={handleInput} value={x} className="form-control" disabled />
                    </div>
                    <div className="form-group mb-3">
                        <button type="submit" className="btn btn-primary">
                            Save Medical Record
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddMedicalRecord;