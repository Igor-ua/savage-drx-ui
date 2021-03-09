import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { useTheme } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";
import {Link} from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import {useStyles} from '../css/responsive-sidebar-css'

function ResponsiveSideBar(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar className={classes.toolbar}/>
            <Divider />
            <List className={classes.list}>

                <div className={classes.logo}>
                    <img alt={'S'} src={'/xr_logo/savagexr_icon_64.png'} className={classes.sideIcon}/>
                </div>

                <Link to={"/"} className={classes.link}>
                    <ListItem button key={'Home'}>
                        <ListItemIcon>
                            <HomeIcon className={classes.icon}/>
                        </ListItemIcon>
                        <ListItemText primary={'Home'} className={classes.iconText}/>
                    </ListItem>
                </Link>
                <Link to={"/online"} className={classes.link}>
                    <ListItem button key={'Online stats'}>
                        <ListItemIcon>
                            <EqualizerIcon className={classes.icon}/>
                        </ListItemIcon>
                        <ListItemText primary={'Online stats'} className={classes.iconText}/>
                    </ListItem>
                </Link>
                {/*<Link to={"/maps"} className={classes.link}>*/}
                {/*    <ListItem button key={'Map stats'}>*/}
                {/*        <ListItemIcon>*/}
                {/*            <DirectionsRunIcon className={classes.icon}/>*/}
                {/*        </ListItemIcon>*/}
                {/*        <ListItemText primary={'Maps history & stats'} className={classes.iconText}/>*/}
                {/*    </ListItem>*/}
                {/*</Link>*/}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="sidebar">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
            </main>
        </div>
    );
}

ResponsiveSideBar.propTypes = {
    window: PropTypes.func,
};

export default ResponsiveSideBar;
