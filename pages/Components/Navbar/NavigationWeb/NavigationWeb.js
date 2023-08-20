import * as React from 'react';
import { useState, useEffect } from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import styles from './NavigationWeb.module.scss';
import AbsoluteProfile from './AbsoluteProfile';

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth})`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));

const NavigationWeb = () => {

    const [activeSection, setActiveSection] = useState('');


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        // Get the initial hash value from the URL
        const initialHash = window.location.hash.slice(1); // Remove the '#' symbol

        if (initialHash) {
            setActiveSection(initialHash);
        }

        const handleHashChange = () => {
            const newHash = window.location.hash.slice(1); // Remove the '#' symbol
            setActiveSection(newHash);
        };

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <AppBar
            position="fixed"
            sx={{
                textDecoration: 'none',
                backgroundColor: 'transparent',
                display: 'flex',
                height: '100vh',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                boxShadow: 'none'
            }}>
            <AbsoluteProfile />
            <div onChange={handleChange} className={styles.navigation}>
                <a disableRipple className={styles.navbarText} href='#home' style={{ backgroundColor: activeSection === 'home' ?  'red' : 'transparent'}}/>
                <a disableRipple className={styles.navbarText} href='#about' style={{ backgroundColor: activeSection === 'about' ?  'red' : 'transparent'}}/>
                <a disableRipple className={styles.navbarText} href='#experience' style={{ backgroundColor: activeSection === 'experience' ?  'red' : 'transparent'}}/>
                <a disableRipple className={styles.navbarText} href='#skills' style={{ backgroundColor: activeSection === 'skills' ?  'red' : 'transparent'}}/>
                <a disableRipple className={styles.navbarText} href='#contact' style={{ backgroundColor: activeSection === 'contact' ?  'red' : 'transparent'}}/>
            </div>
        </AppBar>
    );
}

export default NavigationWeb;