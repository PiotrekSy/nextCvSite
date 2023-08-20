import * as React from 'react';
import Image from 'next/image';
import styles from './Portfolio.module.scss';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

const projects = [
    {
        picture: "/foodApp.jpg",
        name: "Zaplanuj jedzonko",
        description: "Meal Planning Web App connected to Firebase (Authentication and Storage). Possible adding and reading recipes from personal Firestore storage after login.",
        usedTechnologies: "React.js, firebase-auth, firestore, scss, react-scroll, react-carousel, react-router, react-hash-router,  "
    },
    {
        picture: "/prepper.jpg",
        name: "Mr. Prepper",
        description: "Backpacking Web App connected to Firebase (Authentication and Storage). Simple checklist for Backpackers, with the usage of MapBox.",
        usedTechnologies: "React.js, firebase-auth, firestore, scss, react-scroll, react-carousel, react-router, react-hash-router,  "
    },
    {
        picture: "/sharing.jpg",
        name: "Sharing",
        description: "Web App written for a fictional company that provides a tool for sharing clothes and belongings with people in need. Used Firebase with a few libraries for authentication and contact forms. ",
        usedTechnologies: "React.js, firebase-auth, firestore, scss, react-scroll, react-carousel, react-router, react-hash-router,  "
    },
];

const Portfolio = () => {

    return (
        <Carousel
            fullHeightHover={true}
            next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
            prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
            className={styles.projects}
        >
            {projects.map((item, index) => {
                return (
                    <div key={index}
                        className={styles.card}>
                        <div className={styles.image}>
                            <Image src={item.picture}
                                // width={1250}
                                // height={750}
                                fill
                                alt={item.picture} />

                        </div>
                        <div className={styles.text}>
                            <p className={styles.title}>{item.name}</p>
                            <p className={styles.description}>{item.description}</p>
                            <p className={styles.technologiesUsedTitle}>Technologies used:</p>
                            <p className={styles.technologies}>{item.usedTechnologies}</p>
                            <div className={styles.buttons}>
                                <Button className="CheckButton">
                                    Web App
                                </Button>
                                <Button className="CheckButton">
                                    GitHub
                                </Button>
                            </div>

                        </div>
                    </div>
                );
            })}
        </Carousel>
    )
    // <div className={styles.section}>
    //     <div className={styles.projects}>
    //         {projects.map((item, index) => {
    //             return (
    //                 <div key={index}
    //                     className={styles.card}>
    //                     <div className={styles.image}>
    //                         <Image src={item.picture}
    //                             fill
    //                             alt={item.picture} />
    //                     </div>
    //                     <p className={styles.title}>{item.name}</p>
    //                     <p className={styles.description}>{item.description}</p>
    //                     <p className={styles.technologiesUsedTitle}>Technologies used:</p>
    //                     <p className={styles.technologies}>{item.usedTechnologies}</p>
    //                 </div>
    //             );
    //         })}
    //     </div>
    // </div>
    // )
};

export default Portfolio;