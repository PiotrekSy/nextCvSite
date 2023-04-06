import * as React from 'react';
import Portfolio from './Portfolio';
import styles from './Experience.module.scss';
import Container from '@mui/material/Container';
import { Section as FullPageSection } from 'react-fullpage';

const Experience = ({ direction }) => {
    return <FullPageSection style={{ pointerEvents: 'none' }}>
        <Container maxWidth="lg"
            className={styles.section}
            sx={{
                display: 'flex',
                flexDirection: direction,
                alignItems: 'center',
                overflow: 'hidden',
                paddingTop: direction === 'row' ? '100px' : '75px',
                border: '1px solid yellow'
            }}>
            <div className={styles.textContainer}>
                <p className={styles.greeting}>1!</p>
                <p className={styles.description} >After several years of working in the construction industry,
                    I have decided to change my career path. My passion for new technologies has led me to the IT industry.
                    Since mid-2022, I have been constantly seeking new opportunities for growth. My skill set is defined
                    by an analytical approach that is complemented by an unwavering commitment to acquiring knowledge and
                    assimilating novel technologies.
                </p>
                <p className={styles.greeting}>2!</p>
                <p className={styles.description} >After several years of working in the construction industry,
                    I have decided to change my career path. My passion for new technologies has led me to the IT industry.
                    Since mid-2022, I have been constantly seeking new opportunities for growth. My skill set is defined
                    by an analytical approach that is complemented by an unwavering commitment to acquiring knowledge and
                    assimilating novel technologies.
                </p>
            </div>
            <Portfolio />
        </Container>
    </FullPageSection>
};

export default Experience;
