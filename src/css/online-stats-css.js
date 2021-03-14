export const useStyles = theme => ({
    root: {
        display: 'flex',
        height: '100%',
        backgroundColor: '#282c34'
    },
    content: {
        flexGrow: 1,
        maxWidth: '100%',
        [theme.breakpoints.down('xl')]: {
            marginLeft: theme.spacing(5),
            maxWidth: '100%'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(1),
            maxWidth: '100%'
        },

        paddingBottom: theme.spacing(3),
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