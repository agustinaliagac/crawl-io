/**
 * @jest-environment jsdom
 */

/* eslint-disable no-console */

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { shallow } from 'enzyme';
import Search from '../Search';

test('Renders correctly', () => {
  let searchTerm = 'iPhone';
  let nextRoute = '';

  const wrapper = shallow(<Search
    navigateTo={(route) => {
      nextRoute = route;
    }}
    newSearchTerm={(term) => {
      searchTerm = term;
    }}
    searchTerm={searchTerm}
  />);
  expect(wrapper.find('form').length).toEqual(1);

  wrapper.find(TextField).simulate('change', { target: { name: 'searchText', value: 'Samsung' } });
  expect(searchTerm).toEqual('Samsung');

  wrapper.find(RaisedButton).simulate('click');
  expect(nextRoute).toContain('/results?searchTerm=');
});
