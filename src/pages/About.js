import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            <Navigation />
            <Logo />
            <div className='aboutDescription'>
                <h1>About </h1>
                <br></br>
                <p>This is a School Project for Efrei Paris.
                    In Communication courses, students had to chose a subject about the mondialisation, the climat change, or the polution.
                    My theme is the mondialisation ; with the Rest Country API and ReactJS i builded in one day this super simple website that displays every flags from the World.
                </p>
                <br />
                <p>We are the same. We are one. We are the Humanity</p>
                <br/>
                <p>A flag is a piece of fabric (most often rectangular or quadrilateral) with a distinctive design and colours. It is used as a symbol, a signalling device, or for decoration. The term flag is also used to refer to the graphic design employed, and flags have evolved into a general tool for rudimentary signalling and identification, especially in environments where communication is challenging (such as the maritime environment, where semaphore is used). The study of flags is known as "vexillology" from the Latin vexillum, meaning "flag" or "banner".

National flags are patriotic symbols with widely varied interpretations that often include strong military associations because of their original and ongoing use for that purpose. Flags are also used in messaging, advertising, or for decorative purposes.

Some military units are called "flags" after their use of flags. A flag (Arabic: لواء) is equivalent to a brigade in Arab countries. In Spain, a flag (Spanish: bandera) is a battalion-equivalent in the Spanish Legion.</p>
            </div>
            <Footer />
        </div>
    );
};

export default About;