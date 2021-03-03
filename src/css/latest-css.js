export const useStyles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        backgroundColor: '#1e1e25',
        color: 'white',
        borderRadius: '10px 10px 10px 10px',
        marginTop: theme.spacing(3),
        [theme.breakpoints.down('xl')]: {
            marginLeft: theme.spacing(5)
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(1)
        },
    },
    header: {
        textAlign: 'center',
        // textTransform: 'uppercase',
        paddingBottom: theme.spacing(2),
        color: 'yellow',
        fontSize: 14
    },
    latestWorld: {
        display: 'block',
        color: '#fff',

        width: '75%',
        height: '75%',

        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '10px 10px 10px 10px',

    },
    gridWorld: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    imageWrapper: {
        // marginTop: '10px'
    },
    playersLeft: {
        textAlign: 'left'
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
    },

    tableA: {
        tableLayout: 'auto',
        width: '78%',
        border: 'none',
        borderRadius: '10px 10px 10px 10px',
        borderSpacing: '5px',
        "& tr": {
            background: "#2d3c4c",
            border: 'none'
        },
        "& td": {
            border: 'none',
            paddingBottom: '0'
        }
    },

    tableB: {
        tableLayout: 'auto',
        width: '78%',
        border: 'none',
        borderRadius: '10px 10px 10px 10px',
        borderSpacing: '5px',
        "& tr": {
            background: "#144856",
            border: 'none'
        },
        "& td": {
            border: 'none',
            paddingBottom: '0'
        }
    },
    tableContainer: {
        textAlign: '-webkit-center',
    },

    tablePlayersA: {
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
            backgroundColor: '#2d3c4c',
            border: 'none',
        },
        "& td": {
            border: 'none',
        }
    },
    tablePlayersB: {
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
            backgroundColor: '#144856',
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
    emptyTDA: {
        backgroundColor: '#182d31',
    },
    emptyTDB: {
        backgroundColor: '#283544',
    },
    latestTableWrapper: {
        paddingRight: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            paddingRight: theme.spacing(0)
        },
    }
});