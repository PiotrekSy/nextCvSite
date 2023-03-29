import Hero from '../Hero';
import About from '../About';
import * as React from 'react';
import Skills from '../Skills';
import Navbar from "../Navbar";
import Experience from '../Experience';
import ContactForm from '../ContactForm';
import { ScrollToTopOnMount, SectionsContainer } from 'react-fullpage';

const HomePage = () => {

    let options = {
        // activeClass: 'active',
        sectionClassName: 'Section',
        anchors: ['home', 'about', 'experience', 'skills', 'contact'],
        scrollBar: false,
        navigation: false,
        verticalAlign: false,
        arrowNavigation: true
    };

    return (
        <>
            <Navbar />
            <ScrollToTopOnMount />
            <SectionsContainer className="container" {...options}>
                <Hero />
                <About />
                <Experience />
                <Skills />
                <ContactForm />
            </SectionsContainer>
        </>
    )
};

export default HomePage;