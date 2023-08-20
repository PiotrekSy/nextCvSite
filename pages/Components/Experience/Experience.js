import * as React from 'react';
import styles from './Experience.module.scss';
import Container from '@mui/material/Container';

const Hero = ({ direction }) => {
    return (
        <div className={styles.section}>
            <div className={styles.backgroundBlobOne}></div>
            <div className={styles.backgroundBlobTwo}></div>
            <div className={styles.backgroundBlobThree}></div>
            <Container maxWidth="lg" >
                <div className={styles.colouredTextContainer}>
                    <p className={styles.outlinedTextFull}>I BUILD</p>
                    <div className={styles.colouredSmallText}>
                        <div className={styles.circle}></div>
                        <p className={styles.outlinedTextHalf}>responsive</p>
                        <p className={styles.outlinedTextNone}>Web Apps</p>
                        <p className={styles.whiteText}>I’m a frontend developer specializing in building digital </p>
                        <p className={styles.whiteText}>experiences mainly using React.js and React Native.</p>
                        <p className={styles.whiteText}>Currently I invest my time in learning backend technologies.</p>
                    </div>
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.greeting}>Hello!</p>
                    <p className={styles.description} >After several years of working in the construction industry,
                        I have decided to change my career path. My passion for new technologies has led me to the IT industry.
                        Since mid-2022, I have been constantly seeking new opportunities for growth. My skill set is defined
                        by an analytical approach that is complemented by an unwavering commitment to acquiring knowledge and
                        assimilating novel technologies.
                    </p>
                </div>

                <div className={styles.textContainer}>
                    <div>
                        <p className={styles.dates}>December 2014 —  May 2022</p>
                        <p className={styles.dates}>ZTB Polbau sp. z o.o.</p>
                        <p className={styles.description}>- Construction Engineer, Construction Estimator, Health and Safety Specialist Branch</p>
                    </div>
                    <div>
                        <p className={styles.dates}>May 2022 - apps.clinic sp. z o.o.</p>
                        <p className={styles.dates}>Frontend Developer </p>
                        <p className={styles.description} >
                            - Structure website layouts and enhance functionality using React, NEXT.js, Styled Components, and the Storyblok Headless CMS;<br />
                            - Develop React Native mobile apps with Firebase, creating components for commercial projects, and integrating animations using various libraries;<br />
                            - Create environment configurations for the development team, including creating and assigning tasks, ensuring that projects are completed efficiently and on time;<br />
                            - Design and update websites and web applications, using expertise in React, CSS, and other frontend development technologies;<br />
                        </p>
                    </div>
                    <div className={styles.textContainer}>
                        <p className={styles.greeting}>Hello!</p>
                        <p className={styles.description} >After several years of working in the construction industry,
                            I have decided to change my career path. My passion for new technologies has led me to the IT industry.
                            Since mid-2022, I have been constantly seeking new opportunities for growth. My skill set is defined
                            by an analytical approach that is complemented by an unwavering commitment to acquiring knowledge and
                            assimilating novel technologies.
                        </p>
                    </div>
                </div>
            </Container>
        </div>)
};

export default Hero;
