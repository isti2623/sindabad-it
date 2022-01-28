import React from 'react';
import Footer from '../../../shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Experts from '../Experts/Experts';
import MidBanner from '../MidBanner/MidBanner';
import OurCompany from '../OurCompany/OurCompany';
import Satisfied from '../Satisfied/Satisfied';
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
            <Satisfied></Satisfied>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;