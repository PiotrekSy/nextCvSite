import About from '../About';
import * as React from 'react';
import Hero from '../Hero';
import Skills from '../Skills';
import Navbar from "../Navbar";
import Experience from '../Experience';
import ContactForm from '../ContactForm';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Skills />
            <ContactForm />
        </>
    )
};

export default HomePage;