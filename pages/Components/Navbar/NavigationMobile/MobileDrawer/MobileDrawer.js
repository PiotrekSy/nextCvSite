import * as React from 'react';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import FreeBreakfastRoundedIcon from '@mui/icons-material/FreeBreakfastRounded';
import { ListItem } from '@mui/material';
import styles from "./MobileDrawer.module.scss"

const MobileDrawer = ({ handleDrawerClose, open }) => {

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
                    maxWidth: '400px',
                    width: drawerWidth,
                    background: 'rgba( 255, 255, 255, 0.15 )',
                    backdropFilter: 'blur( 17.5px )',
                    webkitBackdropFilter: ' blur( 17.5px )',
                    border: '1px solid rgba( 255, 255, 255, 0.18 )',
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
                    color: 'white'
                }}>
                <ChevronRightIcon />
            </IconButton>
            {/* <Divider /> */}
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
                            height: '80px'
                        }}>
                        <a onClick={handleDrawerClose}
                            href={`#${item}`}
                            style={{ position: 'absolute', height: '100%', width: '100%', zIndex: 100 }}
                        />
                        <ListItemButton
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '20px'
                            }}>
                            <p className={styles.listItemText}>{item.toUpperCase()}</p>
                            <div className={styles.listItemIcon}>{handleIcon(index)}</div>
                        </ListItemButton>
                    </ListItem>)
                )}
            </List>
        </Drawer>
    )
}

export default MobileDrawer;