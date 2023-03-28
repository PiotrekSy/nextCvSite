import * as React from 'react';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import FreeBreakfastRoundedIcon from '@mui/icons-material/FreeBreakfastRounded';
import HomeIcon from '@mui/icons-material/Home';
import { ListItem } from '@mui/material';

const MobileDrawer = ({ handleDrawerClose, theme, open }) => {

    const drawerWidth = '80%';
    const items = ['home', 'about', 'experience', 'skills', 'contact'];

    const handleIcon = (index) => {
        if (index === 0) return <HomeIcon />
        else if (index === 1) return <PersonRoundedIcon />
        else if (index === 2) return <DescriptionRoundedIcon />
        else if (index === 3) return <FreeBreakfastRoundedIcon />
        else if (index === 4) return <MailRoundedIcon />
    };

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    maxWidth: '300px',
                    width: drawerWidth,
                },
            }}
            variant="persistent"
            anchor="right"
            open={open}>
            <IconButton
                onClick={handleDrawerClose}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    paddingRight: '25px',
                    justifyContent: 'center',
                    height: '70px',
                    width: '100%',
                }}>
                {theme.direction === 'rtl' ?
                    <ChevronLeftIcon /> :
                    <ChevronRightIcon />}
            </IconButton>
            <Divider />
            <List>
                {items.map((item, index) => (
                    <ListItem
                        disablePadding
                        key={item}
                        href={`#${item}`}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                            height: '70px'
                        }}>
                        <a onClick={handleDrawerClose}
                            href={`#${item}`}
                            style={{ position: 'absolute', height: '100%', width: '100%', zIndex: 100 }}
                        />
                        <ListItemButton

                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                            <ListItemText
                                primary={`${item}`.toUpperCase()}
                                sx={{
                                    color: 'black',
                                    width: '100%',
                                    textAlign: 'right'
                                }} />
                            <ListItemIcon
                                sx={{ justifyContent: 'center' }} >
                                {handleIcon(index)}
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>)
                )}
            </List>
        </Drawer>
    )
}

export default MobileDrawer;