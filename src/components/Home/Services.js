import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Features from './Features';

const Services = () => {

    const [features, setFeatures ] = useState([]);

        useEffect( ()=>{
            fetch('/features.json')
                .then(res => res.json())
                .then(data => setFeatures(data))
        },[])
    return (
        <Container>
            
            

            <Row >
            {
                features.map(feature => <Features
                    key={feature.key}
                    feature={feature}></Features>)
            
            }
            
            </Row>
            
        </Container>
    );
};

export default Services;