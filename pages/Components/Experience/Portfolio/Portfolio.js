import * as React from 'react';
import Image from 'next/image';
import { projects } from './projects';
import styles from './Portfolio.module.scss';


const Portfolio = () => {

    return (
        <div className={styles.projects}>
            {projects?.map((item, index) => {
                return (
                    <div key={index}
                        className={styles.card}>
                        <div className={styles.image}>
                            <Image src={item.picture}
                                fill
                                alt={item.picture} />
                        </div>
                        <p className = {styles.title}>{item.name}</p>
                        <p className = {styles.description}>{item.description}</p>
                        <p className = {styles.technologiesUsedTitle}>Technologies used:</p>
                        <p className = {styles.technologies}>{item.usedTechnologies}</p>
                    </div>
                )
            })}
        </div>
    )
};

export default Portfolio;
