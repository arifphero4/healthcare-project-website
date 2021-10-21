import React from 'react';

const Doctor = ({ doctor }) => {
    const { image, name, para,email, phone } = doctor;
    return (
        <div className="col-12 col-sm-6 col-lg-4 mb-3">
            <div className="card hight-100">
                <img style={{minHeight:'300px'}} src={image} alt="" className="card-img" />
                <div className="card-body">
                    <h3>{name}</h3>
                    <p><strong>Email : </strong>{ email}</p>
                    <p><strong>Phone : </strong>{phone}</p>
                </div>
                <div className="card-footer">
                     <p>{ para}</p>
                    </div>
            </div>
        </div>
    );
};

export default Doctor;