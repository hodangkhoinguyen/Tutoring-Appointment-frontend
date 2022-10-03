import appointmentService from '../../services/appointment.js';
import { useSelector } from 'react-redux';
import { loginSelector } from './../../redux/selectors.js';
import { useEffect, useState } from 'react';
// import { useState } from 'react';

// function AppointmentList(props) {
//     return <div></div>;
// }

function Appointment() {
    let user = useSelector(loginSelector);
    console.log('login:', user);
    const [appt, setAppt] = useState(null);
    useEffect(() => {
        appointmentService
            .getAppointment(user)
            .then((result) => {
                setAppt(result);
            })
            .catch((err) => console.log(err));
    }, []);

    if (appt == null) {
        return <div>Loading Appointment</div>;
    } else {
        return (
            <div>
                Hello
                <ul>
                    {appt.map((a) => (
                        <li key={a._id}>{new Date(a.date).toString()}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Appointment;
