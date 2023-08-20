import Hero from '../Hero';
import About from '../About';
import * as React from 'react';
import Skills from '../Skills';
import Navbar from "../Navbar";
import Experience from '../Experience';
import styles from "./HomePage.module.scss"
import ContactForm from '../ContactForm';
import { ScrollToTopOnMount, SectionsContainer } from 'react-fullpage';
import { useState, useEffect } from 'react';

const HomePage = () => {

    let options = {
        recordHistory: false,
        sectionClassName: 'Section',
        anchors: ['home', 'about', 'experience', 'skills', 'contact'],
        scrollBar: false,
        navigation: false,
        verticalAlign: false,
        arrowNavigation: true,
    };

    const [windowSize, setWindowSize] = useState();
    useEffect(() => setWindowSize(window.innerWidth), []);
    useEffect(() => window.onresize = () => setWindowSize(window.innerWidth), []);
    const direction = windowSize < 900 ? 'column' : 'row';

    return (
        <>
            <Navbar direction={direction} />
            <ScrollToTopOnMount />
            <SectionsContainer className={styles.container} {...options}>
                <Hero direction={direction} />
                <About direction={direction} />
                <Experience direction={direction} />
                <Skills direction={direction} />
                <ContactForm direction={direction} />
            </SectionsContainer>
        </>
    )
};

export default HomePage;