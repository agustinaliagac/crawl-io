import React, { Component } from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import PropTypes from 'prop-types';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import Snackbar from 'material-ui/Snackbar';

import _ from 'lodash';
import SearchResultsItem from './SearchResultsItem';
import strings from '../../../strings';
import { toObject } from '../../../utils';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxItemsShowing: 20,
      selectedProviders: [],
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }

  componentWillReceiveProps() {
    const names = this.props.providers.map(item => item.providerData.name);

    this.setState({
      ...this.state,
      selectedProviders: names,
    });
  }

  onSearchTextChange = (searchTerm) => {
    const { newSearchTerm } = this.props;
    newSearchTerm(searchTerm);
    if (searchTerm) {
      this.debouncedSearch(searchTerm);
    }
  }

  debouncedSearch = _.debounce(() => {
    this.props.navigateTo(`/results?searchTerm=${this.props.searchTerm}`);
    this.props.performSearch();
  }, 1000);

  isBottom = el => el.getBoundingClientRect().bottom <= (window.innerHeight * 1.5);

  trackScrolling = () => {
    const wrappedElement = document.getElementById('root');
    if (this.isBottom(wrappedElement)) {
      this.setState({
        ...this.state,
        maxItemsShowing: this.state.maxItemsShowing + 20,
      });
    }
  };

  handleProvidersFilterChange = (event, value) => {
    this.setState({
      selectedProviders: value,
    });
  };

  /* eslint-disable no-plusplus */
  renderItems = (searchResults) => {
    const renderedResults = [];
    for (let i = 0; (i < this.state.maxItemsShowing && i < searchResults.length) ; i++) {
      if (toObject(this.state.selectedProviders)[searchResults[i].providerName]) {
        renderedResults.push(this.renderItem(searchResults[i]));
      }
    }
    return renderedResults;
  }

  renderItem = item => (
    <SearchResultsItem providers={this.props.providers} styles={this.props.styles} item={item} />
  );

  render() {
    const { searchResults, searchTerm, styles } = this.props;
    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild>
            <ToolbarTitle
              style={styles.toolbar}
            />
            <TextField
              hintText={strings.resultsPageSearchTextFieldHint}
              style={styles.searchTextField}
              value={searchTerm}
              onChange={event => this.onSearchTextChange(event.target.value)}
            /><br />
          </ToolbarGroup>
          <ToolbarGroup>
            <IconMenu
              iconButtonElement={<IconButton><ContentFilter /></IconButton>}
              onChange={this.handleProvidersFilterChange}
              value={this.state.selectedProviders}
              multiple
              selectedMenuItemStyle={styles.selectedFilterItem}
              clickCloseDelay={0}
            >
              {
                this.props.providers.map(item =>
                  <MenuItem value={item.providerData.name} primaryText={item.providerData.name} />)
              }
            </IconMenu>
          </ToolbarGroup>
        </Toolbar>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {
            this.renderItems(searchResults)
          }
        </div>
        <Snackbar
          open={this.props.notificationOpen}
          message={this.props.notificationText}
          autoHideDuration={2000}
          onRequestClose={this.props.handleHideNotification}
        />
      </div>
    );
  }
}

SearchResults.propTypes = {
  searchResults: PropTypes.array.isRequired,
  performSearch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  providers: PropTypes.array.isRequired,
  newSearchTerm: PropTypes.func.isRequired,
  notificationOpen: PropTypes.bool.isRequired,
  notificationText: PropTypes.string.isRequired,
  handleHideNotification: PropTypes.func.isRequired,
  navigateTo: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired,
};

export default SearchResults;
