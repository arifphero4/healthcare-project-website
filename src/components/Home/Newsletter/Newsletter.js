import React from 'react';

const Newsletter = () => {
    return (
        <div className="bg-success py-4 mb-5">
            <div className="container" >
            <div>
                <h1 className="text-white">Newsletter</h1>
                <div className="row pb-4">
                    <div className="col-12 col-sm-8">
                      <input style={{outline:'none', border:'none'}}  className="bg-white py-2 rounded py-1 px-2 w-100" type="text" placeholder="e-mail" />
                    </div>
                    <div className="col-12 col-sm-4">
                      <button className="bg-white w-100 btn btn-white" >Subscribed</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Newsletter;