import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';
import {ThemeProvider} from "@material-ui/styles";
import {Link} from "react-router-dom";
import CameraIcon from '@material-ui/icons/Camera';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100vh',
        // backgroundColor: '#282c34'
    },
    sidebarWrapper: {
        background: 'linear-gradient(0deg, #3358f4, #1d8cf8)'
    },
    list: {
        background: 'linear-gradient(0deg, #3358f4, #1d8cf8)',
        borderRadius: '5px',
        marginRight: '10px',
        marginLeft: '10px'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        // backgroundColor: 'grey'
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#282c34',
        borderRight: 0
    },
    drawerContainer: {
        overflow: 'auto'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
    link: {
        textTransform: "unset",
        color: "#a5a5a5",
        textDecoration: "unset",
    },
    logo: {
        position: 'relative',
        opacity: '1',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '0',
            right: '15px',
            height: '1px',
            width: 'calc(100% - 30px)',
            background: 'hsla(0,0%,100%,.5)'
        },
        paddingBottom: '15px'
    },
    logoIcon: {
        color: 'cyan',
        float: 'left',
        marginLeft: '13px',
        marginRight: '15px',
        width: '30px',
        height: '30px'
    },
    logoText: {
        color: 'white',
        opacity: '1',
        textTransform: 'uppercase',
        paddingTop: '6px'
    },
    icon: {
        color: 'white'
    },

    iconText: {
        color: 'white'
    }
}));


const theme = createMuiTheme({
    typography: {
        fontSize: 12
    },
});

export default function SideBar() {
    const classes = useStyles();

    return (

        <div>
            <CssBaseline/>
            <div className={classes.sidebarWrapper}>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper
                    }}>
                    <Toolbar/>
                    <ThemeProvider theme={theme}>
                        <div className={classes.drawerContainer}>
                            <List className={classes.list}>

                                <div className={classes.logo}>
                                    <CameraIcon className={classes.logoIcon}/>
                                    <ListItemText primary={'Community Server'} className={classes.logoText}/>
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
        </div>
    );
}
