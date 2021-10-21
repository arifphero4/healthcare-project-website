import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])
    return (
        <div className="mt-5">
            <div className="bg-danger text-white py-4">
                <h1>Our All Doctors</h1>
            </div>
            <div className="container py-4 mx-auto row">
                {
                    doctors.map(doctor =>  <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
                </div>
        </div>
    );
};

export default Doctors;