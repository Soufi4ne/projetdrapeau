import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Logo/>
            <Navigation />
            <h1>About </h1>
            <p>This is a School Project for Efrei Paris. 
                In Communication courses, students had to chose a subject about the mondialisation, the climat change, or the polution. 
                My theme is the mondialisation ; with the Rest Country API and ReactJS i builded this site that displays every flags from the World.
            </p>
            <br />
            <p>We are the same. We are one. We are the Humanity</p>
        </div>
    );
};

export default About;