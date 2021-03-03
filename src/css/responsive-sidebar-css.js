import {makeStyles} from "@material-ui/core/styles";

const drawerWidth = 200;

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0
        },
    },
    appBar: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolbar: {
        backgroundColor: '#282c34'
    },
    content: {
        flexGrow: 1,
        // padding: theme.spacing(5),
    },
    list: {
        background: 'linear-gradient(0deg, #114d8a, #404c75)',
        borderRadius: '5px',
        marginRight: '10px',
        marginLeft: '10px'
    },
    drawerPaper: {
        width: 240,
        backgroundColor: '#282c34',
        borderRight: 0
    },
    drawerContainer: {
        overflow: 'auto',
        marginTop: theme.spacing(15)
    },
    link: {
        textTransform: "unset",
        color: "#a5a5a5",
        textDecoration: "unset",
    },
    logo: {
        position: 'relative',
        opacity: '1',
        textAlign: '-webkit-center',
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
    },
    sideIcon: {
        width: theme.spacing(5),
        height: theme.spacing(5)
    }
}));