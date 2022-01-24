import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import MidBanner from '../MidBanner/MidBanner';
import OurCompany from '../OurCompany/OurCompany';
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
            <Technology></Technology>
            <MidBanner></MidBanner>
            <OurCompany></OurCompany>
            <Experts></Experts>
        </div>
    );
};

export default Home;