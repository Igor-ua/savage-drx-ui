export const useStyles = theme => ({
    root: {
        display: 'flex',
        height: '100%',
    },
    content: {
        flexGrow: 1,
        maxWidth: '100%',

        [theme.breakpoints.down('xl')]: {
            maxWidth: '100%'
        },

        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%',
            marginTop: theme.spacing(10),
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(0)
        },
    },
    latest: {
        flexGrow: '2'
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap-reverse',
        maxWidth: '100%',
        justifyContent: 'center',
    }
});