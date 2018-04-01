import React from 'react';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import { toObject } from '../../../utils';
import strings from '../../../strings';

/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */

const defaultProductImageURL = 'http://www.abc.net.au/news/image/954416-3x2-940x627.jpg';

const SearchResultsItem = ({ item, styles, providers, handleItemSelected }) => (
  <div style={{ cursor: 'pointer' }} key={item.link} onClick={() => handleItemSelected(item)}>
    <Paper
      style={styles.paper}
      zDepth={2}
      rounded
    >
      <div style={styles.itemWrapper}>
        <img
          style={styles.itemProviderImage}
          alt={item.providerName}
          src={toObject(providers, 'providerData.name')[item.providerName].providerData.image}
        />
        <div style={styles.imageWrapper}>
          <img
            alt={item.title}
            style={styles.thumbnail}
            src={item.thumbnail || defaultProductImageURL}
          />
        </div>
        <div style={styles.itemBottomWrapper}>
          <span style={styles.itemTitle}>{item.title}</span>
          <span style={styles.itemPrice}>
            { item.price ? `$ ${item.price}` : strings.noPrice }
          </span>
        </div>
      </div>
    </Paper>
  </div>
);

SearchResultsItem.propTypes = {
  item: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired,
  providers: PropTypes.array.isRequired,
  handleItemSelected: PropTypes.func.isRequired,
};

export default SearchResultsItem;
