export const useStyles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        backgroundColor: '#1e1e25',
        color: 'white',
        borderRadius: '10px 10px 10px 10px',
        marginTop: theme.spacing(3),
        flexWrap: 'nowrap',
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(9),
            marginLeft: theme.spacing(1)
        },
    },
    header: {
        textAlign: 'center',
        paddingBottom: theme.spacing(2),
        color: 'red',
        fontSize: 14
    },
    worldAvatar: {
        color: '#fff',
        // width: 'auto',
        // height: 'auto',

        // display: 'block',

        maxWidth: '97%',
        maxHeight: '97%',

        // maxHeight: theme.spacing(29),
        // maxWidth: theme.spacing(29),

        // width: '100%',
        // height: '100%',

        // width: theme.spacing(29),
        // height: theme.spacing(29),
        // float: 'right',
        borderRadius: '10px 10px 10px 10px',
    },
    gridWorld: {
        paddingTop: theme.spacing(0.5),
        paddingLeft: theme.spacing(2)
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
    table: {
        tableLayout: 'auto',
        width: '100%',
        border: 'none',
        borderRadius: '10px 10px 10px 10px',
        borderSpacing: '5px',
        "& tr": {
            backgroundColor: '#3a3131',
            border: 'none'
        },
        "& td": {
            border: 'none',
            paddingBottom: '0'
        }
    },
    tablePlayers: {
        tableLayout: 'auto',
        width: '100%',
        border: 'none',
        borderRadius: '10px 10px 10px 10px',
        borderSpacing: '3px',
        paddingLeft: '2px',
        paddingBottom: '2px',
        "& th": {
            background: '#2c6868',
            marginBottom: '5px',
            textAlign: 'left',
        },
        "& tr": {
            backgroundColor: '#252f2d',
            border: 'none',
        },
        "& td": {
            border: 'none',
        }
    },
    tdInnerDiv: {
        display: 'table',
        height: '20px',
        overflow: 'hidden',
        "& span": {
            display: 'table-cell',
            verticalAlign: 'middle'
        }
    },
    emptyTD: {
        backgroundColor: '#1e1e25',
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
        marginRight: theme.spacing(0.5),
        maxWidth: '18px',
        maxHeight: '18px',
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