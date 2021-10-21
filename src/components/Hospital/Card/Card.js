import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <div>
            <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 py-4 mb-3 col-md-4">
                    <div className="card">
                        <div className="card-header bg-info">
                            <h2 className="text-danger">
                                <i class="fas fa-chalkboard-teacher me-2"></i>
                                Certified Dentist
                            </h2>
                        </div>
                        <div className="card-body bg-success">
                            <p className="text-white border-bottom border-white pb-4"> Consectetur adipisicing elit. Numquam nisi vero commodi, possimus facilis debitis aut porro autem velit enim?</p>
                            <p className="text-white"> Consectetur adipisicing elit. Numquam nisi vero commodi, possimus facilis debitis aut porro autem velit enim?</p>
                        </div>
                        <div className="card-footer bg-dark py-4">
                            <Link className="text-white text-decoration-none h5" to="/home">Learn more</Link>
                        </div>
                    </div>
                 </div>
                <div className="col-12 col-sm-6 mb-3 col-md-4">
                    <div className="card">
                        <div className="card-header bg-info">
                            <h2 className="text-danger">
                                <i class="fas fa-grimace me-2"></i>
                                New Technology
                            </h2>
                        </div>
                        <div className="card-body bg-success">
                            <p className="text-white border-bottom border-white pb-4"> Consectetur adipisicing elit. Numquam nisi vero commodi, possimus facilis debitis aut porro autem velit enim?</p>
                            <p className="text-white"> Consectetur adipisicing elit. Numquam nisi vero commodi, possimus facilis debitis aut porro autem velit enim?</p>
                        </div>
                        <div className="card-footer bg-dark py-4">
                            <Link className="text-white text-decoration-none h5" to="/home">Learn more</Link>
                        </div>
                    </div>
                 </div>
                <div className="col-12 col-sm-6 mb-3 col-md-4">
                    <div className="card">
                        <div className="card-header bg-info">
                            <h2 className="text-danger">
                                <i class="far fa-hand-scissors me-2"></i>
                                Accept Insurance
                            </h2>
                        </div>
                        <div className="card-body bg-success">
                          <p className="text-white border-bottom border-white pb-4"> Consectetur adipisicing elit. Numquam nisi vero commodi, possimus facilis debitis aut porro autem velit enim?</p>
                          <p className="text-white"> Consectetur adipisicing elit. Numquam nisi vero commodi, possimus facilis debitis aut porro autem velit enim?</p>
                        </div>
                            <div className="card-footer bg-dark py-4">
                            <Link className="text-white text-decoration-none h5" to="/home">Learn more</Link>
                        </div>
                    </div>
                 </div>
             </div>
        </div>
        </div>
    );
};

export default Card;