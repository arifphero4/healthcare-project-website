import React from 'react';

const Banner = () => {
    const hospitalPageBanner = {
        background: `url(https://i.ibb.co/RjNM23G/overview-bg.jpg)no-repeat center center`,
        backgroundSize : 'cover'
    }
    return (
        <div style={hospitalPageBanner}>
            <div className="container row py-5 align-items-center mx-auto">
                <div className="col-12 col-md-7 py-5">
                    <h2 className="text-danger">Nervous Troubled Attractive Staring Right Anxiously! Make An Appointment</h2>
                </div>
                <div className="col-12 col-md-5">
                    <button className="btn btn-danger">Book Appointment </button>
                    <button className="btn mt-4 mt-md-0 ms-md-3 btn-warning">Book Appointment </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;