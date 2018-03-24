import React from 'react';
import { Provider, connect } from 'react-redux';
import LinearProgress from 'material-ui/LinearProgress';
import muiThemeable from 'material-ui/styles/muiThemeable';
import PropTypes from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Router from './modules/Navigation';
import store from './redux';
import theme from './styles/theme';
import strings from './strings';

/* eslint-disable react/forbid-prop-types */

const AppContent = ({ loading, muiTheme }) => (
  <div>
    <AppBar
      title={strings.appTitle}
      showMenuIconButton={false}
      titleStyle={{ textAlign: 'center' }}
    />
    { loading && <LinearProgress color={muiTheme.palette.accent1Color} mode="indeterminate" /> }
    <Router />
  </div>
);

AppContent.propTypes = {
  loading: PropTypes.bool.isRequired,
  muiTheme: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  const { loading } = state.network;
  return {
    loading,
  };
};

const ConnectedAppContent = connect(mapStateToProps, null)(muiThemeable()(AppContent));

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={theme}>
      <ConnectedAppContent />
    </MuiThemeProvider>
  </Provider>
);

export default App;
