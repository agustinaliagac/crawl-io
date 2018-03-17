import React from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';

import SearchContainer from '../Search/container';
import SearchResultsContainer from '../SearchResults/container';

const router = () => (
  <Router>
    <div>
      <Route exact path="/" component={SearchContainer} />
      <Route path="/results" component={SearchResultsContainer} />
    </div>
  </Router>
);

export default router;
