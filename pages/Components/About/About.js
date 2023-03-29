import styles from './About.module.scss';
import * as React from 'react';
import Container from '@mui/material/Container';
import { Section as FullPageSection } from 'react-fullpage';

const About = () => {
    return <FullPageSection>
        <div className={styles.section}>
            <Container maxWidth="lg" sx={{ border: '1px solid red' }}>
                <p>
                    SKILLS
                </p>
                <p >
                    Something short and leading about the collection below—its contents,
                    the creator, etc. Make it short and sweet, but not too short so folks
                    don&apos;t simply skip over it entirely.
                </p>
            </Container>
        </div>
    </FullPageSection>
};

export default About;
