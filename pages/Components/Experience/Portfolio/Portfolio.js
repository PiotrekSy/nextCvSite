import * as React from 'react';
import styles from './Portfolio.module.scss';
import Container from '@mui/material/Container';
import { Section as FullPageSection } from 'react-fullpage';
import { Carousel } from 'react-responsive-carousel';
import { projects } from './projects';

const Portfolio = () => {

    return <FullPageSection style={{ pointerEvents: 'none', position: 'relative' }}>
        <div className={styles.section}>
            <Container maxWidth="lg"
                className={styles.section}
                sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                <div className={styles.carouselContainer}>
                    <Carousel >
                        {projects.map((item, index) =>
                            <div key={index}
                                // className={styles.carouselItem}
                                >
                                <p className={styles.itemName}>{item.name}</p>
                            </div>)}
                    </Carousel>
                </div>
            </Container>
        </div>
    </FullPageSection>
};

export default Portfolio;
