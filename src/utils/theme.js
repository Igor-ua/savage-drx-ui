import {createMuiTheme} from "@material-ui/core/styles";

export const defaultTheme = createMuiTheme({
    typography: {
        fontSize: 12
    },
    palette: {
        type: 'dark',
        background: {
            default: '#282c34'
        }
    }
});