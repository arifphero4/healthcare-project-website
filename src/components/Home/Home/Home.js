import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Newsletter from '../Newsletter/Newsletter';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Newsletter/>
            <About />
        </div>
    );
};

export default Home;