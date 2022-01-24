import React from 'react';
import Banner from '../Banner/Banner';
import MidBanner from '../MidBanner/MidBanner';
import Service from '../Service/Service';
import Technology from '../Technology/Technology';
import Testimonials from '../Testimonials/Testimonials';
import Works from '../Works/Works';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Works></Works>
            <Testimonials></Testimonials>
            <MidBanner></MidBanner>
            <Technology></Technology>
        </div>
    );
};

export default Home;