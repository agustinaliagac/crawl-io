import React from 'react';
import { Provider } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Router from './modules/Navigation';
import store from './redux';

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <div>
        <AppBar
          title="Crawlio"
        />
        <Router />
      </div>
    </MuiThemeProvider>
  </Provider>
);

export default App;
