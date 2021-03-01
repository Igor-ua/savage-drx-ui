import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from "@material-ui/styles";
import {Link} from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

import {useStyles} from '../css/sidebar-css'


const theme = createMuiTheme({
    typography: {
        fontSize: 12
    },
});

export default function SideBar() {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <CssBaseline/>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper
                }}>
                <ThemeProvider theme={theme}>
                    <div className={classes.drawerContainer}>
                        <List className={classes.list}>

                            <div className={classes.logo}>
                                <Avatar alt={'S'} src={'./xr_logo/savagexr_icon_64.png'} variant="rounded"
                                        className={classes.sideIcon}/>
                            </div>

                            <Link to={"/"} className={classes.link}>
                                <ListItem button key={'Home'}>
                                    <ListItemIcon>
                                        <HomeIcon className={classes.icon}/>
                                    </ListItemIcon>
                                    <ListItemText primary={'Home'} className={classes.iconText}/>
                                </ListItem>
                            </Link>
                            <Link to={"/results"} className={classes.link}>
                                <ListItem button key={'Results'}>
                                    <ListItemIcon>
                                        <EqualizerIcon className={classes.icon}/>
                                    </ListItemIcon>
                                    <ListItemText primary={'Statistics'} className={classes.iconText}/>
                                </ListItem>
                            </Link>
                            <Link to={"/else"} className={classes.link}>
                                <ListItem button key={'PlaceHolder'}>
                                    <ListItemIcon>
                                        <SportsEsportsIcon className={classes.icon}/>
                                    </ListItemIcon>
                                    <ListItemText primary={'PlaceHolder'} className={classes.iconText}/>
                                </ListItem>
                            </Link>
                        </List>
                    </div>
                </ThemeProvider>
            </Drawer>
        </div>
    );
}
