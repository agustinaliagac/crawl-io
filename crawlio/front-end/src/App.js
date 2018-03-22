import React, { Component } from 'react';
import { Provider } from 'react-redux';
import LinearProgress from 'material-ui/LinearProgress';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Router from './modules/Navigation';
import store from './redux';
import muiTheme from './styles/theme';
import muiThemeable from 'material-ui/styles/muiThemeable';

class AppContent extends Component {
  render() {
    return(
      <div>
        <AppBar
          title="Crawlio"
          showMenuIconButton={false}
          titleStyle={{ textAlign: 'center' }}
        />
          { this.props.loading && <LinearProgress color={this.props.muiTheme.palette.accent1Color} mode="indeterminate" /> }
        <Router />
      </div>
    );
  }
}

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
