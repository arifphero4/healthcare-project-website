import React from 'react';
import {  Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Features = ({feature}) => {
    const {title, img, detail,  id} = feature;
    
    return (
        
            <Col  style={{border:"1px solid gray", }}  className=" col-lg-4  ">
                    <img style={{minHeight:"300px"}} className="card-img-top " src={img} alt=""/>
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{detail.substring(0,160)}</p>

                    <Link to={`/details/${id}`}>  Read More </Link>
                   
                    </div>
                </Col>
        
    );
}; <img src="" alt="" />

export default Features;