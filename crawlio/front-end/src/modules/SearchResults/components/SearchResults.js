import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import PropTypes from 'prop-types';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import Snackbar from 'material-ui/Snackbar';

import _ from 'lodash';

/* eslint-disable react/forbid-prop-types */

const cardWidth = 250;
const cardHeight = 270;
const imageHeight = 140;

const styles = {
  paper: {
    height: cardHeight,
    width: cardWidth,
    margin: 15,
    overflow: 'hidden',
    textAlign: 'center',
  },
  thumbnail: {
    width: cardWidth,
    height: 'auto'
  },
  itemWrapper: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    width: cardWidth,
    height: '100%',
  },
  imageWrapper: {
    height: imageHeight,
    overflow: 'hidden'
  },
  itemTitle: {
    marginTop: 15
  },
  itemPrice: {
    fontSize: '1.9em',
    marginBottom: 10
  },
  itemProvider: {

  },
  itemBottomWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  searchTextField: {
    width: 300,
  }
}

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
    const names = this.props.providers.map((item) => {
      return item.providerData.name;
    });

    this.setState({
      ...this.state,
      selectedProviders: names,
    });
  }

  debouncedSearch = _.debounce((searchTerm) => {
    this.props.navigateTo(`/results?searchTerm=${this.props.searchTerm}`);
    this.props.performSearch();
  }, 1000);

  onSearchTextChange = (searchTerm) => {
    const { newSearchTerm } = this.props;
    newSearchTerm(searchTerm);
    if (searchTerm) {
      this.debouncedSearch(searchTerm);
    }
  }

  renderItem = item => (
    <a key={item.link} target="_blank" href={item.link}>
      <Paper style={styles.paper} 
        zDepth={2}
        rounded
        >
        <div style={styles.itemWrapper}>
          <div style={styles.imageWrapper}>
            <img style={styles.thumbnail} src={item.thumbnail}/>
          </div>
          <div style={styles.itemBottomWrapper}>
            <span style={styles.itemTitle}>{item.title}</span>
            <span style={{ ...styles.itemPrice, color: this.props.muiTheme.palette.accent1Color }}>${item.price}</span>
          </div>
        </div>
      </Paper>
    </a>
  );

  renderItems = searchResults => {
    let renderedResults = [];
    for(let i = 0; (i < this.state.maxItemsShowing && i < searchResults.length) ; i++) {
      if (this.toObject(this.state.selectedProviders)[searchResults[i].providerName]) {
        renderedResults.push(this.renderItem(searchResults[i]));
      }
    }
    return renderedResults;
  }

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= (window.innerHeight * 1.5);
  }
  
  trackScrolling = () => {
    const wrappedElement = document.getElementById('root');
    if (this.isBottom(wrappedElement)) {
      this.setState({
        ...this.state,
        maxItemsShowing: this.state.maxItemsShowing + 20,
      })
    }
  };

  toObject = (array) => {
    let obj = {};
    array.forEach(item => {
      obj[item] = item;
    });
    return obj;
  }

  handleProvidersFilterChange = (event, value) => {
    this.setState({
      selectedProviders: value,
    });
  };

  render() {
    const { searchResults, searchTerm } = this.props;
    return (
      <div>
      <Toolbar>
        <ToolbarGroup firstChild>
          <ToolbarTitle style={{ marginLeft: 30, color: this.props.muiTheme.palette.textColor }} text="Búsqueda" />
          <TextField
            hintText="Escribí el producto que estás buscando"
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
            multiple={true}
            selectedMenuItemStyle={{ color: this.props.muiTheme.palette.primary1Color }}
            clickCloseDelay={0}
          >
            {
              this.props.providers.map((item, index) => <MenuItem value={item.providerData.name} primaryText={item.providerData.name} />)
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
  loading: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string.isRequired,
  providers: PropTypes.array.isRequired,
  newSearchTerm: PropTypes.func.isRequired,
  notificationOpen: PropTypes.bool.isRequired,
  notificationText: PropTypes.string.isRequired,
  handleHideNotification: PropTypes.func.isRequired,
  navigateTo: PropTypes.func.isRequired,
};

export default muiThemeable()(SearchResults);
