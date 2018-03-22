import { indigo400, grey400, cyan400 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo400,
    titleColor: grey400,
    accent1Color: cyan400,
  },
  appBar: {
    height: 60,
  },
});

export default muiTheme;
