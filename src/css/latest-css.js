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
    latestWorld: {
        color: '#fff',
        width: theme.spacing(18),
        height: theme.spacing(18),
        float: 'left'
    },
    gridWorld: {
        paddingLeft: theme.spacing(5)
    },
    gridTeamA: {
        "& div": {
            background: "#283544",
            marginBottom: '5px',
            marginRight: '5px'
        }
    },
    gridTeamB: {
        "& div": {
            background: "#324358",
            marginBottom: '5px',
            marginRight: '5px'
        }
    },
    dataLeftA: {
        textAlign: 'left',
        paddingLeft: theme.spacing(1),
        "& div": {
            background: "#283544",
            marginBottom: '5px'
        }
    },
    dataLeftB: {
        textAlign: 'left',
        paddingLeft: theme.spacing(1),
        "& div": {
            background: "#324358",
            marginBottom: '5px'
        }
    },
    dataRight: {
        textAlign: 'right',
        paddingRight: theme.spacing(1)
    },
    playersLeft: {
        textAlign: 'left'
    },
    teamHeader: {
        textTransform: 'capitalize',
        background: "#2c6868",
        marginBottom: theme.spacing(1),
        marginRight: theme.spacing(0.5)
    },
    clanIconLatest: {
        display: 'inline-block',
        verticalAlign: 'middle',
        width: theme.spacing(2),
        height: theme.spacing(2)
    },
    playerWrapper: {
        display: 'flex'
    },
    middle: {
        display: 'flex',
        alignItems: 'center'
    },
    resultsContainerA: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        marginBottom: theme.spacing(2),
        backgroundColor: '#182d31',
        borderRadius: '10px 10px 10px 10px'
    },
    resultsContainerB: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        marginBottom: theme.spacing(2),
        backgroundColor: '#2b3542',
        borderRadius: '10px 10px 10px 10px'
    }
});