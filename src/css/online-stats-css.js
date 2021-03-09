export const useStyles = theme => ({
    root: {
        display: 'flex',
        height: '100%',
        backgroundColor: '#282c34'
    },
    content: {
        flexGrow: 1,
        [theme.breakpoints.down('xl')]: {
            marginLeft: theme.spacing(5),
            marginRight: theme.spacing(3),
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1)
        },

        paddingBottom: theme.spacing(3),
    },
    latest: {
        flexGrow: '2'
    },
    online: {
        flexGrow: '1',
        maxWidth: '600px'
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap-reverse',
        maxWidth: '1700px',
        justifyContent: 'center',
    }
});