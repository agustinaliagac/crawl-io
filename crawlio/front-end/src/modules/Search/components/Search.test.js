/**
 * @jest-environment node
 */

import Search from './Search';
import React from 'react';
import { shallow } from 'enzyme';

test('Todo component renders the text of the todo', () => {
  const wrapper = shallow(
    <Search
      navigateTo={() => {}}
      updateSearchTerm={() => {}}
      searchTerm={"cafetera"}
    />
  );
  console.log(wrapper);
  const p = wrapper.find('.toggle-todo');
});