import * as React from 'react';
import styles from './Portfolio.module.scss';
import Container from '@mui/material/Container';
import { Section as FullPageSection } from 'react-fullpage';

const Portfolio = () => {

    return <FullPageSection style={{ pointerEvents: 'none', position: 'relative' }}>
        <div className={styles.section}>
            <Container maxWidth="lg"
                className={styles.section}
                sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                <div className={styles.textContainer}>
                    <p className={styles.greeting}>Portfolio</p>
                    <p className={styles.description} >After several years of working in the construction industry,
                        I have decided to change my career path. My passion for new technologies has led me to the IT industry.
                        Since mid-2022, I have been constantly seeking new opportunities for growth. My skill set is defined
                        by an analytical approach that is complemented by an unwavering commitment to acquiring knowledge and
                        assimilating novel technologies.
                    </p>
                </div>
            </Container>
        </div>
    </FullPageSection>
};

export default Portfolio;
