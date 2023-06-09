import * as React from 'react';
import { useState } from 'react';
import MobileDrawer from './MobileDrawer';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import { styled, useTheme } from '@mui/material/styles';
import styles from './NavigationMobile.module.scss';

const drawerWidth = 300;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));

export default function NavigationMobile({ scrollToTop }) {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <CssBaseline />
            <AppBar
                position="fixed"
                open={open}
                sx={{
                    height: '70px',
                    display: 'flex',
                    justifyContent: 'center',
                    background: 'transparent',
                    boxShadow: 'none',
                }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h3" noWrap sx={{ flexGrow: 1, textDecoration: "none", color: "white" }} component="a" href='#home'>
                        <div className={styles.logo}>
                            <p className={styles.logoText}>PS</p>
                        </div>
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        size="large"
                        sx={{ ...(open && { display: 'none' }), padding: 4 }}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <MobileDrawer
                open={open}
                handleDrawerClose={handleDrawerClose}
                theme={theme} />
        </>
    );
}