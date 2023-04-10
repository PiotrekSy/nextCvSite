import styles from './About.module.scss';
import * as React from 'react';
import Image from 'next/image';
import Container from '@mui/material/Container';
import { Section as FullPageSection } from 'react-fullpage';

const text = 'PIOTR SYJUD - FRONTEND DEVELOPER - ';

const curvedText = text.split("")
    .map((item, index) =>
        <span key={index}
            style={{
                transform: `rotate(${index * 10.4}deg)`,
                display: 'flex',
                alignItems: 'center'
            }}>
            {item}
        </span>);

const About = ({ direction }) => {

    return <FullPageSection style={{ pointerEvents: 'none' }} >
        <div className={styles.section}>
            <Container maxWidth="lg"
                sx={{
                    display: 'flex',
                    flexDirection: direction,
                    alignItems: 'center'
                }} >
                <div className={styles.backgroundShapeOne} />
                <div className={styles.backgroundShapeTwo} />
                <div className={styles.avatarContainer}>
                    <p className={styles.curvedText}>{curvedText}</p>
                    <div className={styles.innerAvatarContainer}>
                        <Image
                            className={styles.avatarBackground}
                            src='/avatar.svg'
                            width={330}
                            height={330}
                            alt="avatar"
                        />
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
            </Container>
        </div>
    </FullPageSection>
};

export default About;
