import React from 'react';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import Testimonials from '../Testimonials/Testimonials';
import Works from '../Works/Works';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Works></Works>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;