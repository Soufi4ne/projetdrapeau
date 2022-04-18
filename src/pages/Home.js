import React from 'react';
import Navigation from "../components/Navigation"
import Logo from '../components/Logo';
import Countries from '../components/Countries';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Logo/>
            {/* <h1>Acceuil Squid Game</h1> */}
            <Countries/>
            <Footer />
        </div>
    );
};

export default Home;