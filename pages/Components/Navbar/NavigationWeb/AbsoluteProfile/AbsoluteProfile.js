import styles from './AbsoluteProfile.module.scss';
import * as React from 'react';
import Image from 'next/image';
import Container from '@mui/material/Container';

const AbsoluteProfile = () => {

    return <div className={styles.section}>
        <Container maxWidth="lg"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>

            <div className={styles.avatarContainer}>
                <div className={styles.innerAvatarContainer}>
                    <Image
                        className={styles.avatarBackground}
                        src='/avatar.svg'
                        width={280}
                        height={280}
                        alt="avatar"
                    />
                </div>
            </div>
            <div>
                <p>piotrsyjud@gmail.com</p>
                <p>Localization: Krakow, poland</p>
            </div>
            <div className={styles.textContainer}>
                <p className={styles.greeting}>Hello!</p>
                <p className={styles.description}>
                </p>
            </div>
            <div className={styles.socialMedia}>
                <button>LI</button>
                <button>LI</button>
                <button>LI</button>
            </div>
            <div>

                <button>HIRE</button>
            </div>
        </Container>
    </div>
};

export default AbsoluteProfile;
