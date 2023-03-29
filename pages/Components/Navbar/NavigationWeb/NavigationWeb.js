import * as React from 'react';
import { useState } from 'react';
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
                boxShadow: 'none',
                background: 'rgba(228, 228, 228, 0.065)',
                backdropFilter: 'blur(100px)',
                webkitBackdropFilter: 'blur(7px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            }}>
            <Toolbar>
                <Typography variant="h3" noWrap sx={{ flexGrow: 1, textDecoration: "none", color: "white" }} component="a" href='#home'>
                    Persistent dra
                </Typography>
                <Tabs value={false} onChange={handleChange} centered>
                    <Tab disableRipple className={styles.navbarText} label="About Me" sx={{ color: 'white' }} href='#about' />
                    <Tab disableRipple className={styles.navbarText} label="Experience" sx={{ color: 'white' }} href='#experience' />
                    <Tab disableRipple className={styles.navbarText} label="Skills" sx={{ color: 'white' }} href='#skills' />
                    <Tab disableRipple className={styles.navbarText} label="Contact" sx={{ color: 'white' }} href='#contact' />
                </Tabs>
            </Toolbar>
        </AppBar>
    );
}

export default NavigationWeb;