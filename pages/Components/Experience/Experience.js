import * as React from 'react';
import Portfolio from './Portfolio';
import styles from './Experience.module.scss';
import Container from '@mui/material/Container';

const Experience = ({ direction }) => {
    return (
    <Container maxWidth="lg"
        className={styles.section}
        sx={{
            display: 'flex',
            flexDirection: direction,
            alignItems: 'center',
            overflow: 'hidden',
            paddingTop: direction === 'row' ? '100px' : '75px',
        }}>
        <div className={styles.textContainer}>
            <div>
                <p className={styles.dates}>January 2020 —  May 2022 - ZTB Polbau sp. z o.o.</p>
                <p className={styles.description}>Construction Engineer, Construction Estimator, Health and Safety Specialist Branch</p>
            </div>
            <div>
                <p className={styles.dates}>May 2022 - apps.clinic sp. z o.o. - Frontend Developer </p>
                <p className={styles.description} >
                    - Structure website layouts and enhance functionality using React, NEXT.js, Styled Components, and the Storyblok Headless CMS;<br />
                    - Develop React Native mobile apps with Firebase, creating components for commercial projects, and integrating animations using various libraries;<br />
                    - Create environment configurations for the development team, including creating and assigning tasks, ensuring that projects are completed efficiently and on time;<br />
                    - Design and update websites and web applications, using expertise in React, CSS, and other frontend development technologies;<br />
                </p>
            </div>
        </div>
        <Portfolio />
    </Container>
    )
};

export default Experience;
