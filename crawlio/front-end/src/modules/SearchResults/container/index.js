import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import queryString from 'query-string';

import PropTypes from 'prop-types';
import SearchResults from '../components/SearchResults';
import { searchResultsAsync } from '..';

/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prefer-stateless-function */

class SearchResultsContainer extends Component {
  componentWillMount() {
    const { searchTerm } = queryString.parse(this.props.location.search);

    this.performSearch(searchTerm);
  }

  performSearch = (searchTerm) => {
    this.props.asynchronous.searchTerm(searchTerm);
  }

  render() {
    const { searchResults, loading } = this.props;
    return (
      <SearchResults
        ref={(ref) => {
          this.searchResults = ref;
        }}
        searchResults={searchResults}
        performSearch={this.performSearch}
        loading={loading}
      />
    );
  }
}

SearchResultsContainer.propTypes = {
  searchResults: PropTypes.array.isRequired,
  asynchronous: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const { searchResults } = state.results;
  const { loading } = state.network;
  return {
    searchResults,
    loading,
  };
};

const mapDispatchToProps = dispatch => ({
  asynchronous: bindActionCreators(searchResultsAsync, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsContainer);
