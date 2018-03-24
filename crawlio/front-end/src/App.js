import React from 'react';
import { Provider, connect } from 'react-redux';
import LinearProgress from 'material-ui/LinearProgress';
import muiThemeable from 'material-ui/styles/muiThemeable';
import PropTypes from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Router from './modules/Navigation';
import store from './redux';
import muiTheme from './styles/theme';

const AppContent = ({ loading }) => (
  <div>
    <AppBar
      title="crawl-io"
      showMenuIconButton={false}
      titleStyle={{ textAlign: 'center' }}
    />
    { loading && <LinearProgress color={this.props.muiTheme.palette.accent1Color} mode="indeterminate" /> }
    <Router />
  </div>
);

AppContent.propTypes = {
  loading: PropTypes.bool.isRequired,
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
    <MuiThemeProvider muiTheme={muiTheme}>
      <ConnectedAppContent />
    </MuiThemeProvider>
  </Provider>
);

export default App;
