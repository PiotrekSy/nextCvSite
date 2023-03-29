import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from './Experience.module.scss';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Section as FullPageSection } from 'react-fullpage';

const Experience = () => {

    return <FullPageSection>
        <div className={styles.section}>
            <Container maxWidth="lg" sx={{ border: '1px solid red' }}>
                <p>
                    ExP
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

export default Experience;
