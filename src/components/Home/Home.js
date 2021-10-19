import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;