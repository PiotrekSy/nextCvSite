import * as React from 'react';
import styles from './Hero.module.scss';
import Container from '@mui/material/Container';
import { Section as FullPageSection } from 'react-fullpage';

const Hero = () => {
    return <FullPageSection style={{ pointerEvents: 'none' }}>
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
            </Container>
        </div>
    </FullPageSection>
};

export default Hero;
