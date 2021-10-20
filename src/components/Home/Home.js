import React from 'react';
import Banner from './Banner';
import './Home.css';
import Services from './Services';
const Home = () => {
    return (
        <div className="home-container">
            <Banner></Banner>
            <h1 className="py-3 text-center">Our Services</h1>
            <Services></Services>
        
        </div>
    );
};

export default Home;