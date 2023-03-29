import * as React from 'react';
import styles from './Experience.module.scss';
import Container from '@mui/material/Container';
import { Section as FullPageSection } from 'react-fullpage';

const Experience = () => {
    return <FullPageSection>
        <div className={styles.section}>
            <Container maxWidth="lg" sx={{ border: '1px solid red' }}>
                <p className = {styles.text}>
                    ExP
                </p>
                <p className = {styles.text}>
                    Something short and leading about the collection below—its contents,
                    the creator, etc. Make it short and sweet, but not too short so folks
                    don&apos;t simply skip over it entirely.
                </p>
            </Container>
        </div>
    </FullPageSection>
};

export default Experience;
