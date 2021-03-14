export const useStyles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        backgroundColor: '#1e1e25',
        color: 'white',
        borderRadius: '10px 10px 10px 10px',
        marginTop: theme.spacing(3),
        flexWrap: 'nowrap',
        [theme.breakpoints.down('xl')]: {
            marginLeft: theme.spacing(5)
        },
        [theme.breakpoints.up('xl')]: {
            marginLeft: theme.spacing(0)
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(9),
            marginLeft: theme.spacing(1)
        },
        border: '2px solid red'
    },
    header: {
        textAlign: 'center',
        paddingBottom: theme.spacing(2),
        color: 'red',
        fontSize: 16
    },
    worldLive: {
        display: 'block',
        color: '#fff',
        width: '75%',
        height: '75%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '10px 10px 10px 10px',
    },
    imageWrapper: {
    },
    tableContainer: {
        width: '78%',
        margin: 'auto'
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