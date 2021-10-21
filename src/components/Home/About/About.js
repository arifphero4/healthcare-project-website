import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="container pb-2 text-center">
                <h1 className="h1 text-danger">About us</h1>
            </div>
            <div className="container row mx-auto pb-5" >
            <div className="col-12 col-md-4">
                <div className="card">
                    <div className="card-header bg-success text-white">
                    <h3>OPENING HOURS</h3>
                     </div>
                    <div className="card-body">
                        <p className="pb-2 d-flex align-items-center justify-content-between border-bottom border-secondary">
                            <span className="fw-bold text-danger">Monday</span>
                            <span className="fw-bold text-danger">8:00am – 12:00pm</span>
                        </p>
                        <p className="pb-2 d-flex align-items-center justify-content-between border-bottom border-secondary">
                            <span className="fw-bold text-danger">Tues – Thur</span>
                            <span className="fw-bold text-danger">8:00am – 4:30pm</span>
                        </p>
                        <p className="pb-2 d-flex align-items-center justify-content-between border-bottom border-secondary">
                            <span className="fw-bold text-danger">Friday</span>
                            <span className="fw-bold text-danger">8:00am – 3:00pm</span>
                        </p>
                        <p className="pb-2 d-flex align-items-center justify-content-between border-bottom border-secondary">
                            <span className="fw-bold text-danger">Sunday</span>
                            <span className="fw-bold text-danger">8:00am – 4:30pm</span>
                        </p>
                        <p className="pb-2 d-flex align-items-center justify-content-between border-bottom border-secondary">
                            <span className="fw-bold text-danger">Checkup</span>
                            <span className="fw-bold text-danger">8:00am – 4:30pm</span>
                        </p>
                     </div>
                    <div className="card-footer bg-danger">
                        <Link className="btn btn-success w-100" to="/home">View Hospital Details</Link>
                     </div>
                 </div>
            </div>
            <div className="col-12 col-md-8">
                <h1>Welcome to dental clinic</h1>
                <p className="lead fw-bold text-secondary">A dentist, also known as a dental surgeon, The dentist’s supporting team aids in providing oral health services.</p>
                <p className="lead fw-bold text-secondary">A dentist, also known as a dental surgeon, The dentist’s supporting team aids in providing oral health services.</p>
                <ul className="list-group">
                    <li className="list-group-item d-flex w-100">
                        <p className="col-6">Qualified Doctors</p>
                        <p className="col-6">Feel like Home Services</p>
                    </li>
                    <li className="list-group-item d-flex w-100">
                        <p className="col-6">24×7 Emergency Services</p>
                        <p className="col-6">Outdoor Checkup</p>
                    </li>
                    <li className="list-group-item d-flex w-100">
                        <p className="col-6">General Medical</p>
                        <p className="col-6">Easy and Affordable Billing</p>
                    </li>
                    <li className="list-group-item d-flex w-100">
                        <p className="col-6">Qualified Doctors</p>
                        <p className="col-6">Feel like Home Services</p>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default About;