import * as React from 'react';
import styles from './Skills.module.scss';
import Container from '@mui/material/Container';
import { Section as FullPageSection } from 'react-fullpage';
import Portfolio from '../Portfolio';

const Skills = ({ direction }) => {

  return <FullPageSection style={{ pointerEvents: 'none' }}>
    <div className={styles.section}>
      <Container maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: direction,
          alignItems: 'center'
        }}>
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
        <Portfolio />
      </Container>
    </div>
  </FullPageSection>
};

export default Skills;
