export const useStyles = theme => ({
    root: {
        display: 'flex',
        height: '100%',
        backgroundColor: '#282c34'
    },
    content: {
        flexGrow: 1,
        paddingRight: theme.spacing(1),
        paddingBottom: theme.spacing(3),
        marginTop: theme.spacing(2),
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