import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import styles from './NavigationWeb.module.scss';

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

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <AppBar
            position="fixed"
            sx={{
                textDecoration: 'none',
                backgroundColor: 'transparent',
                minHeight: '100px',
                display: 'flex',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'none'
            }}>
            <Toolbar>
                <Typography variant="h3" noWrap sx={{ flexGrow: 1, textDecoration: "none"}} component="a" href='#home'>
                    <div className={styles.logo}>
                        <p className={styles.logoText}>PS</p>
                    </div>
                </Typography>
                <Tabs value={false} onChange={handleChange} centered>
                    <Tab disableRipple className={styles.navbarText} label="About Me" href='#about' />
                    <Tab disableRipple className={styles.navbarText} label="Experience" href='#experience' />
                    <Tab disableRipple className={styles.navbarText} label="Skills" href='#skills' />
                    <Tab disableRipple className={styles.navbarText} label="Contact" href='#contact' />
                    <Tab disableRipple className={styles.navbarText} label="RESUME" />
                </Tabs>
            </Toolbar>
        </AppBar>
    );
}

export default NavigationWeb;