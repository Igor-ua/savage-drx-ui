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
});