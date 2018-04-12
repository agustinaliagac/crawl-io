/**
 * @jest-environment jsdom
 */

/* eslint-disable no-console */

import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { shallow } from 'enzyme';
import Paper from 'material-ui/Paper';

import SearchResultsItem from '../SearchResultsItem';
import providerCreators from '../../../../../../data-providers';
import searchResultsStyles from '../../container/searchResultsStyles';

test('Renders correctly', () => {
  const searchTerm = 'Xiaomi';
  const resultItem = {
    title: 'iPhone X',
    price: '30000',
    providerName: 'AlaMaula',
    link: 'https://google.com',
    thumbnail: 'https://ss7.vzw.com/is/image/VerizonWireless/iphone-x-kf-device-tab-d-3-retina?$pngalpha$&scl=1',
  };
  const providers = (function createProviders() {
    return Object.keys(providerCreators).map(item => providerCreators[item]({
      searchTerm,
    }));
  }());

  const styles = searchResultsStyles(getMuiTheme());

  const wrapper = shallow(<SearchResultsItem
    providers={providers}
    item={resultItem}
    handleItemSelected={() => {}}
    styles={styles}
  />);

  expect(wrapper.find(Paper).length).toEqual(1);
  expect(wrapper.find('.itemTitle').text()).toEqual(resultItem.title);
  expect(wrapper.find('.itemPrice').text()).toEqual(`$ ${resultItem.price}`);
  expect(wrapper.find('.itemThumbnail').prop('src')).toEqual(resultItem.thumbnail);
});
