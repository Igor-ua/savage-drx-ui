export const useStyles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1),
        backgroundColor: '#359cbf',
        color: 'white',
        borderRadius: '10px 10px 10px 10px',
        marginTop: theme.spacing(3),
        flexWrap: 'nowrap',
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(9),
            marginLeft: theme.spacing(1)
        },
    },
    highCharts: {
    }
});