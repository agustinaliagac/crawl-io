import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import queryString from 'query-string';

import PropTypes from 'prop-types';
import SearchResults from '../components/SearchResults';
import { searchResultsAsync } from '..';
import { searchThunks } from '../../Search';

/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prefer-stateless-function */

class SearchResultsContainer extends Component {
  componentWillMount() {
    const { searchTerm } = queryString.parse(this.props.location.search);

    this.performSearch(searchTerm);
    this.props.thunks.newSearchTerm(searchTerm);
  }

  performSearch = (searchTerm) => {
    this.props.thunks.searchTerm(searchTerm);
  }

  render() {
    const { searchResults, loading, searchTerm, providers, thunks } = this.props;
    return (
      <SearchResults
        ref={(ref) => {
          this.searchResults = ref;
        }}
        searchTerm={searchTerm}
        searchResults={searchResults}
        performSearch={this.performSearch}
        newSearchTerm={thunks.newSearchTerm}
        loading={loading}
        providers={providers}
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
};

const mapStateToProps = (state) => {
  const { searchResults } = state.results;
  const { loading } = state.network;
  const { searchTerm, providers } = state.search;
  return {
    searchResults,
    loading,
    searchTerm,
    providers
  };
};

const mapDispatchToProps = dispatch => ({
  thunks: bindActionCreators({ ...searchResultsAsync, ...searchThunks}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsContainer);
