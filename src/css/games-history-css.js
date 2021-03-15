export const useStyles = theme => ({
    root: {
        display: 'flex',
        height: '100%',
        flexGrow: 1,
        borderRadius: '10px 10px 10px 10px',
    },
    content: {
        flexGrow: 1,
        // border: '1px solid yellow',
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(8),
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1)
        },
    },

    gridContainer: {
        flexDirection: 'row',
        // flexWrap: 'wrap-reverse',
        justifyContent: 'right',
    },
    datePickerWrapper: {
        float: 'left',
        width: '150px',
    },
    worldImageWrapper: {
    },
    worldImage: {
        display: 'block',
        width: '120px',
        height: '120px',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '5px 5px 5px 5px',
    },
    tableContainer: {
        width: '100%',
    },
    table: {
        tableLayout: 'auto',
        width: '100%',
        minWidth: '140px',
        border: 'none',
        borderRadius: '5px 5px 5px 5px',
        borderSpacing: '1px',
        "& tr": {
            background: "#2d3c4c",
            border: 'none'
        },
        "& td": {
            border: 'none',
            paddingBottom: '0'
        }
    },
    resultInfo: {
        float: 'left',
        width: '100%',
        border: '1px solid red'
    },
    buttonWrapper: {
        marginTop: '2px',
        display: 'flex',
        justifyContent: 'center'
    },

    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        width: '1219px',
    },
    titleBar: {
        background: 'transparent',
    },
    titleBarBottom: {
        background: 'transparent',
    },
    resultsWrapper: {
        marginTop: '10px'
    }
});