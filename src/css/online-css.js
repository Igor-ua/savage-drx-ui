export const useStyles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        backgroundColor: '#1e1e25',
        color: 'white',
        borderRadius: '10px 10px 10px 10px'
    },
    header: {
        textAlign: 'center',
        textTransform: 'uppercase',
        paddingBottom: theme.spacing(2)
    },
    worldAvatar: {
        color: '#fff',
        width: theme.spacing(25),
        height: theme.spacing(25),
        float: 'right'
    },
    gridWorld: {
        paddingBottom: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },
    gridTeam: {
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(2)
    },
    dataLeft: {
        textAlign: 'left',
        paddingLeft: theme.spacing(1),
        "& div": {
            background: "#3a3131",
            marginBottom: '5px'
        }
    },
    dataRight: {
        textAlign: 'right',
        paddingRight: theme.spacing(1),
        "& div": {
            background: "#3a3131",
            marginBottom: '5px'
        }
    },
    playersLeft: {
        textAlign: 'left'
    },
    playersRight: {
        textAlign: 'right'
    },
    playersCenter: {
        textAlign: 'center'
    },
    teamHeader: {
        textTransform: 'capitalize',
        background: '#2c6868',
        marginBottom: '5px'
    },
    clanIcon: {
        display: 'inline-block',
        verticalAlign: 'middle',
        width: theme.spacing(3),
        height: theme.spacing(3),
        marginRight: theme.spacing(0.5)
    },
    playerWrapper: {
        display: 'flex'
    },
    middle: {
        display: 'flex',
        alignItems: 'center',
        background: '#252f2d',
        marginBottom: '5px'
    }
});