import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import queryString from 'query-string';

import PropTypes from 'prop-types';
import SearchResults from '../components/SearchResults';
import { searchResultsThunks, searchResultsActionCreators } from '..';
import { searchThunks } from '../../Search';

/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prefer-stateless-function */

class SearchResultsContainer extends Component {
  componentWillMount() {
    this.performSearch();
  }

  navigateTo = path => this.props.history.push(path);

  performSearch = () => {
    const { searchTerm } = queryString.parse(this.props.location.search);
    this.props.thunks.newSearchTerm(searchTerm);
    this.props.thunks.searchTerm(searchTerm);
  }

  handleHideNotification = () => {
    this.props.actionCreators.hideNotification();
  }

  render() {
    const {
      searchResults,
      loading,
      searchTerm,
      providers,
      thunks,
      notificationOpen,
      notificationText,
    } = this.props;

    return (
      <SearchResults
        ref={(ref) => {
          this.searchResults = ref;
        }}
        hideNotification
        searchTerm={searchTerm}
        searchResults={searchResults}
        performSearch={this.performSearch}
        newSearchTerm={thunks.newSearchTerm}
        loading={loading}
        notificationOpen={notificationOpen}
        notificationText={notificationText}
        providers={providers}
        navigateTo={this.navigateTo}
        handleHideNotification={this.handleHideNotification}
      />
    );
  }
}

SearchResultsContainer.propTypes = {
  searchResults: PropTypes.array.isRequired,
  thunks: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string.isRequired,
  providers: PropTypes.array.isRequired,
  notificationOpen: PropTypes.bool.isRequired,
  notificationText: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  actionCreators: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  const { searchResults, notificationOpen, notificationText } = state.results;
  const { loading } = state.network;
  const { searchTerm, providers } = state.search;
  return {
    searchResults,
    loading,
    searchTerm,
    providers,
    notificationOpen,
    notificationText,
  };
};

const mapDispatchToProps = dispatch => ({
  thunks: bindActionCreators({ ...searchResultsThunks, ...searchThunks }, dispatch),
  actionCreators: bindActionCreators({ ...searchResultsActionCreators }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsContainer);
