import * as React from 'react';
import { useState } from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

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
                backgroundColor: '#33094e',
                minHeight: '100px',
                display: 'flex',
                justifyContent: 'center',
                cursor: 'pointer'
            }}>
            <Toolbar>
                <Typography variant="h3" noWrap sx={{ flexGrow: 1, textDecoration: "none", color: "white" }} component="a" href='#home'>
                    Persistent dra
                </Typography>
                <Tabs value={false} onChange={handleChange} centered>
                    <Tab disableRipple label="About Me" sx={{ color: 'white' }} href='#about' />
                    <Tab disableRipple label="Experience" sx={{ color: 'white' }} href='#experience' />
                    <Tab disableRipple label="Skills" sx={{ color: 'white' }} href='#skills' />
                    <Tab disableRipple label="Contact" sx={{ color: 'white' }} href='#contact' />
                </Tabs>
            </Toolbar>
        </AppBar>
    );
}

export default NavigationWeb;