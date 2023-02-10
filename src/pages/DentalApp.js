import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import './css/AppointmentIndex.css';

import axios from 'axios';

class DentalAppointment extends Component
{
    state = {
        appointment: [],
        loading: true,
    }
    async componentDidMount(){
        const res = await axios.get('http://localhost:8000/api/dentalappointment');
        
        if (res.data.status === 200)
        {
            this.setState({
                appointment: res.data.appointment,
                loading: false,
            });
        }
    }

    render(){

        var appointment_table = "";
        if (this.state.loading)
        {
            appointment_table = <tr><td colSpan="6"> <h2>Loading...</h2> </td></tr>;
        }
        else 
        {
            appointment_table = 
            this.state.appointment.map( (item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.fname}</td>
                        <td>{item.lname}</td>
                        <td>{item.aptdate}</td>
                        <td>{item.apttime}</td>
                        <td>{item.aptpurpose}</td>
                        <td>{item.aptverify}</td>
                        <td>
                            <Link
                            to={"/edit-aptdental"}
                            state={item}
                            className="btn btn-success btn-sm"
                            >
                            Verify
                            </Link>
                        </td>
                    </tr>
                );
            } )
        }

        return(
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
                        <text className="clinicappoinments">Dental Appointments</text>
                        <br></br>
                        <br></br>
                    </div>
                <div>
                    <table className="table table-striped table-info">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Appointment Date</th>
                                <th>Appointment Time</th>
                                <th>Appointment Purpose</th>
                                <th>Verification</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointment_table}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
        );
    }
}

export default DentalAppointment;
